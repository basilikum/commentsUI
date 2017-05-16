import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user.model';
import { UserService } from '../core/user.service';

@Component({
    selector: 'cmm-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

    user: User;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.user = this.userService.getUser();
    }
}
