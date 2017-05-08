import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from 'ng2-ui-auth';
import { JwtHttp } from 'ng2-ui-auth';

import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {

    private usersUrl = environment.apiBaseUrl + '/auth/users/';

    constructor(
        private auth: AuthService,
        private http: JwtHttp
    ) { }

    get(id: number) : Observable<User> {
        return this.http.get(this.usersUrl + id + '/').map((response: Response) => {
            return new User(response.json());
        });
    }

    getUser() : User {
        const payload = this.auth.getPayload();
        if (!payload) {
            return null;
        }
        return new User({
            id: payload['user_id'],
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
