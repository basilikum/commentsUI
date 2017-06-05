import { Component, OnInit, Input } from '@angular/core';

import { AvatarService } from '../../core/avatar.service';

import { FileObj } from '../img-select/file-obj';

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

    private fileObj: FileObj = null;
    private cropData: CropData = null;

    constructor(
        private avatarService: AvatarService
    ) { }

    ngOnInit() {
        this.imgSrc = this.avatarService.getLink(this.user, 'orig');
    }

    cropHandler(cropData: CropData) {
        this.cropData = cropData;
    }

    upload() {
        this.avatarService.upload(this.fileObj.file, this.cropData).subscribe(() => {

        });
    }

    imgSelect(fileObj: FileObj) {
        this.imgSrc = fileObj.url;
        this.fileObj = fileObj;
    }
}
