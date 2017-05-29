import { Component, OnInit, Input } from '@angular/core';

import { AvatarService } from '../../core/avatar.service';

import { User } from '../models/user.model';
import { CropData } from '../cropper/crop-data';

@Component({
    selector: 'cmm-user-avatar-select',
    templateUrl: './user-avatar-select.component.html',
    styleUrls: ['./user-avatar-select.component.less']
})
export class UserAvatarSelectComponent implements OnInit {

    @Input() user: User;

    imgSrc = '';

    private cropData: CropData = null;

    constructor(
        private avatarService: AvatarService
    ) { }

    ngOnInit() {
        this.imgSrc = this.user.imgUrl + '.jpg?size=256';
    }

    cropHandler(cropData: CropData) {
        this.cropData = cropData;
    }

    upload() {
        this.avatarService.upload('any').subscribe((tmpFileUrl: string) => {
            this.imgSrc = tmpFileUrl;
        });
    }
}
