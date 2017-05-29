import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { JwtHttp } from 'ng2-ui-auth';

import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import { HelperService } from '../core/helper.service';

import { User } from '../shared/models/user.model';
import { CropData } from '../shared/cropper/crop-data';


@Injectable()
export class AvatarService {

    private usersUrl = environment.apiBaseUrl + '/users';

    constructor(
        private helperService: HelperService,
        private jwtHttp: JwtHttp
    ) { }

    getLink(user: User, size: number) : string {
        return this.usersUrl + '/' + user.id + '/avatar.jpg?size=' + size;
    }

    upload(file: any) : Observable<string> {
        const data = { file: file };
        return this.jwtHttp.post(this.usersUrl + '/avatar', data).map((response: Response) => {
            return this.usersUrl + '/avatar/' + response.json().id + '.jpg';
        });
    }

    set(imgId: string, cropData: CropData) : Observable<boolean> {
        const data = Object.assign({ img_id: imgId }, cropData);
        return this.jwtHttp.patch(this.usersUrl + '/avatar', data).map((response: Response) => {
            return true;
        });
    }
}
