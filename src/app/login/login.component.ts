import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from 'ng2-ui-auth';

import { UserService } from '../core/user.service';

@Component({
    selector: 'cmm-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private auth: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    socialLogin(platform) {
        this.auth.authenticate(platform)
            .subscribe({
                error: (err: any) => console.log(err),
                complete: () => {
                    if (this.userService.isActive()) {
                        this.router.navigate(['']);
                    } else {
                        this.router.navigate(['login', 'finalize']);
                    }
                }
            });
    }

    onSubmit() {
        this.auth.login(this.loginForm.value).subscribe({
            error: (err: any) => console.log(err),
            complete: () => this.router.navigate([''])
        });
    }

    private initForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
