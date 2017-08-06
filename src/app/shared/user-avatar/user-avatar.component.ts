import { Component, OnInit, OnChanges, Input } from '@angular/core';

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
    @Input() counter = 0;

    imgUrl = '';

    constructor(
        private avatarService: AvatarService
    ) { }

    ngOnInit() {
        this.setImg();
    }

    ngOnChanges() {
        this.setImg();
    }

    private setImg() {
        this.imgUrl = this.avatarService.getLink(this.user, this.size) + '&c=' + this.counter;
    }
}
