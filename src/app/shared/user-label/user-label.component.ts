import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../core/user.service';

import { User } from '../models/user.model';

@Component({
    selector: 'cmm-user-label',
    templateUrl: './user-label.component.html',
    styleUrls: ['./user-label.component.less']
})
export class UserLabelComponent implements OnInit {

    @Input() user: User;
    @Input() date: Date;

    loggedInUser: User;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.loggedInUser = this.userService.getUser();
    }
}
