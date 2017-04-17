import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

import { UserService } from '../user.service';

@Component({
    selector: 'cmm-user-login-link',
    templateUrl: './user-login-link.component.html',
    styleUrls: ['./user-login-link.component.less']
})
export class UserLoginLinkComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private userService: UserService
    ) { }

    ngOnInit() {
    }

    isAuthenticated() {
        return this.auth.isAuthenticated();
    }

    getUser() {
        return this.userService.getUser();
    }

    logout() {
        this.auth.logout();
    }
}
