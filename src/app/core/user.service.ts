import { Injectable } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {

    constructor(
        private auth: AuthService
    ) { }

    getUser() {
        const payload = this.auth.getPayload();
        if (!payload) {
            return null;
        }
        return new User({
            id: payload['user_id'],
            name: payload['display_name']
        });
    }
}
