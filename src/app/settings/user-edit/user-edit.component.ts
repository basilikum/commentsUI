import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { FormsService } from '../../core/forms.service';
import { UserService } from '../../core/user.service';
import { User } from '../../shared/models/user.model';


@Component({
    selector: 'cmm-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {

    @Input() user: User;

    userEditForm: FormGroup;

    private timer: any;

    constructor(
        public forms: FormsService,
        private formBuilder: FormBuilder,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        this.userService.update(this.userEditForm.value).subscribe((success) => {

        });
    }

    private isUsernameUnique(control: FormControl) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        const q = new Promise((resolve, reject) => {
            this.timer = setTimeout(() => {
                console.log("test exist", control.value);
                this.userService.exists(control.value).subscribe((exists) => {
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
        this.userEditForm = this.formBuilder.group({
            username: [this.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(32)], this.isUsernameUnique.bind(this)],
            email: [this.user.email, [Validators.email]]
        });
    }
}
