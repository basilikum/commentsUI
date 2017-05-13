import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from 'ng2-ui-auth';
import { JwtHttp } from 'ng2-ui-auth';

import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {

    private usersUrl = environment.apiBaseUrl + '/users';

    constructor(
        private auth: AuthService,
        private http: Http,
        private jwtHttp: JwtHttp
    ) { }

    get(id: number) : Observable<User> {
        return this.jwtHttp.get(this.usersUrl + '/' + id).map((response: Response) => {
            return new User(response.json());
        });
    }

    register(regData: { username:string, email:string, password:string, 'g-recaptcha-response':string }) : Observable<boolean> {
        return this.http.post(this.usersUrl + '/register', regData).map((response: Response) => {
            this.auth.setToken(response.json().token);
            return true;
        });
    }

    finalize(finalizeData: { username:string, 'g-recaptcha-response':string }) : Observable<boolean> {
        return this.jwtHttp.patch(this.usersUrl + '/finalize', finalizeData).map((response: Response) => {
            this.auth.setToken(response.json().token);
            return true;
        });
    }

    exists(username: string) : Observable<boolean> {
        return this.http.get(this.usersUrl + '/user-exists?username=' + username).map((response: Response) => {
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
            name: payload['username']
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
