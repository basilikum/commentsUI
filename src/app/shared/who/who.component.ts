import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../core/user.service';

import { User } from '../models/user.model';

@Component({
    selector: 'cmm-who',
    templateUrl: './who.component.html',
    styleUrls: ['./who.component.less']
})
export class WhoComponent implements OnInit {
    @Input() user: User;

    loggedInUser: User;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.loggedInUser = this.userService.getUser();
    }
}
