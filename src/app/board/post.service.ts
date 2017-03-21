import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { JwtHttp } from 'ng2-ui-auth';

import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.model';
import { PartialList } from '../shared/partial-list';

import { HelperService } from '../core/helper.service';


@Injectable()
export class PostService {

    private postsUrl = environment.apiBaseUrl + '/boards/posts/';

    constructor(
        private http: JwtHttp,
        private helperService: HelperService
    ) { }

    list(params: any): Observable<PartialList<Post>> {
        const qs = this.helperService.formatQueryParams(params);
        return this.http.get(this.postsUrl + '?' + qs).map((response: Response) => {
            return new PartialList<Post>(Post, response.json());
        });
    }
}
