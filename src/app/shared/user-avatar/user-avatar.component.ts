import { Component, OnInit, Input } from '@angular/core';

import { User } from '../models/user.model';

@Component({
    selector: 'cmm-user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.less']
})
export class UserAvatarComponent implements OnInit {

    @Input() user: User;
    @Input() size: number;

    constructor() { }

    ngOnInit() {
    }
}
