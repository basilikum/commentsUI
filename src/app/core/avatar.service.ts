import { Injectable } from '@angular/core';
import { Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

import { HelperService } from './helper.service';
import { HttpService } from './http.service';

import { User } from '../shared/models/user.model';
import { CropData } from '../shared/cropper/crop-data';


@Injectable()
export class AvatarService {

    private usersUrl = environment.apiBaseUrl + '/users';

    constructor(
        private helperService: HelperService,
        private http: HttpService
    ) { }

    getLink(user: User, size: number | string) : string {
        return this.usersUrl + '/' + user.id + '/avatar.jpg?size=' + size;
    }

    getOriginalLink(user: User) : string {
        return this.usersUrl + '/' + user.id + '/original.jpg';
    }

    upload(file: File, cropData: CropData) : Observable<string> {
        const formData:FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append('x', '' + cropData.x);
        formData.append('y', '' + cropData.y);
        formData.append('size', '' + cropData.size);;
        const headers = new Headers();
        headers.append('Content-Type', null);
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.usersUrl + '/avatar', formData, options).map((response: Response) => {
            return this.usersUrl + '/avatar/' + response.json().id + '.jpg';
        });
    }

    set(imgId: string, cropData: CropData) : Observable<boolean> {
        const data = Object.assign({ img_id: imgId }, cropData);
        return this.http.patch(this.usersUrl + '/avatar', data).map((response: Response) => {
            return true;
        });
    }
}
