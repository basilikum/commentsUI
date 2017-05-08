import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../shared/models/user.model';

import { AuthService } from '../../core/auth/auth.service';
import { FormsService } from '../../core/forms.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'cmm-finalize-social',
  templateUrl: './finalize-social.component.html',
  styleUrls: ['./finalize-social.component.less']
})
export class FinalizeSocialComponent implements OnInit {

    finalizeForm: FormGroup;

    private timer: any;
    private user: User;

    constructor(
        public forms: FormsService,
        private auth: AuthService,
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.user = this.userService.getUser();
        this.initForm();
    }

    onSubmit() {
        this.auth.finalize(this.finalizeForm.value).subscribe((success) => {
            this.router.navigate(['']);
        });
    }

    cancel() {
        this.router.navigate(['']);
    }

    recaptchaVerify(response) {
        this.finalizeForm.controls['g-recaptcha-response'].setValue(response);
    }

    private isUsernameUnique(control: FormControl) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        const q = new Promise((resolve, reject) => {
            this.timer = setTimeout(() => {
                if (control.value === this.user.name) {
                    resolve(null);
                } else {
                    this.auth.userExists(control.value).subscribe((exists) => {
                        if (exists) {
                            resolve({ userUnique: true});
                        } else {
                            resolve(null);
                        }
                    });
                }
            }, 500);
        });
        return q;
    }

    private initForm() {
        this.finalizeForm = this.formBuilder.group({
            username: [this.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(32)], this.isUsernameUnique.bind(this)],
            'g-recaptcha-response': ['', Validators.required]
        });
    }
}
