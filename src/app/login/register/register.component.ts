import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../../core/auth/auth.service';

@Component({
    selector: 'cmm-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    private timer: any;

    constructor(
        private auth: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        this.auth.register(this.registerForm.value).subscribe((result) => {
            console.log(result);
        });
    }

    isValid(field) {
        const control = this.registerForm.controls[field];
        return control.touched && control.valid;
    }

    isInvalid(field) {
        const control = this.registerForm.controls[field];
        return control.touched && control.invalid;
    }

    hasError(field: string, errorCodes: string[]) {
        const control = this.registerForm.controls[field];
        return control.touched && errorCodes.some(errorCode => control.hasError(errorCode));
    }

    private isUsernameUnique(control: FormControl) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        const q = new Promise((resolve, reject) => {
            this.timer = setTimeout(() => {
                this.auth.userExists(control.value).subscribe((exists) => {
                    if (exists) {
                        resolve({ userUnique: true});
                    } else {
                        resolve(null);
                    }
                });
            }, 500);
        });
        return q;
    }

    private initForm() {
        this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)], this.isUsernameUnique.bind(this)],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }
}
