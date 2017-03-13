import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';

@Component({
    selector: 'cmm-user-login-link',
    templateUrl: './user-login-link.component.html',
    styleUrls: ['./user-login-link.component.less']
})
export class UserLoginLinkComponent implements OnInit {



    constructor(private auth: AuthService) { }

    ngOnInit() {
    }

    isAuthenticated() {
        return this.auth.isAuthenticated();
    }

    logout() {
        this.auth.logout();
    }
}
