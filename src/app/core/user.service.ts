import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from 'ng2-ui-auth';

import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import { User } from '../shared/models/user.model';

import { HttpService } from './http.service';

@Injectable()
export class UserService {

    private usersUrl = environment.apiBaseUrl + '/users';

    constructor(
        private auth: AuthService,
        private http: HttpService
    ) { }

    get(id: number) : Observable<User> {
        return this.http.get(this.usersUrl + '/' + id).map((response: Response) => {
            return new User(response.json());
        });
    }

    me() : Observable<User> {
        return this.http.get(this.usersUrl + '/me').map((response: Response) => {
            return new User(response.json());
        });
    }

    register(regData: { username:string, email:string, password:string, 'g-recaptcha-response':string }) : Observable<boolean> {
        return this.http.post(this.usersUrl + '/register', regData, { excludeToken: true }).map((response: Response) => {
            this.auth.setToken(response.json().token);
            return true;
        });
    }

    update(data: { username:string, email:string, password?:string }) : Observable<boolean> {
        return this.http.patch(this.usersUrl + '/me', data).map((response: Response) => {
            return true;
        });
    }

    finalize(finalizeData: { username:string, 'g-recaptcha-response':string }) : Observable<boolean> {
        return this.http.patch(this.usersUrl + '/finalize', finalizeData).map((response: Response) => {
            this.auth.setToken(response.json().token);
            return true;
        });
    }

    exists(username: string) : Observable<boolean> {
        return this.http.get(this.usersUrl + '/user-exists?username=' + username, { excludeToken: true }).map((response: Response) => {
            return response.json().exists;
        });
    }

    getUser() : User {
        const payload = this.auth.getPayload();
        if (!payload) {
            return null;
        }
        return new User({
            uid: payload['user_id'],
            username: payload['username']
        });
    }

    isActive() : boolean {
        const payload = this.auth.getPayload();
        if (!payload) {
            return false;
        }
        return payload['is_active'];
    }
}
