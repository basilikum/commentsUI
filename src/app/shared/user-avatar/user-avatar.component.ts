import { Component, OnInit, Input } from '@angular/core';

import { AvatarService } from '../../core/avatar.service';

import { User } from '../models/user.model';

@Component({
    selector: 'cmm-user-avatar',
    templateUrl: './user-avatar.component.html',
    styleUrls: ['./user-avatar.component.less']
})
export class UserAvatarComponent implements OnInit {

    @Input() user: User;
    @Input() size: number;

    imgUrl = '';

    constructor(
        private avatarService: AvatarService
    ) { }

    ngOnInit() {
        this.imgUrl = this.avatarService.getLink(this.user, this.size);
    }
}
