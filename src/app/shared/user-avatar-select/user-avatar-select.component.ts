import { Component, OnInit, Input } from '@angular/core';

import { User } from '../models/user.model';

@Component({
    selector: 'cmm-user-avatar-select',
    templateUrl: './user-avatar-select.component.html',
    styleUrls: ['./user-avatar-select.component.less']
})
export class UserAvatarSelectComponent implements OnInit {

    @Input() user: User;

    imgSrc = '';

    constructor() {
    }

    ngOnInit() {
        this.imgSrc = this.user.imgUrl + '.jpg?size=256';
    }
}
