import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from 'ng2-ui-auth';

@Component({
    selector: 'cmm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    socialLogin(platform) {
        this.auth.authenticate(platform)
            .subscribe({
                error: (err: any) => console.log(err),
                complete: () => this.router.navigate([''])
            });
    }
}
