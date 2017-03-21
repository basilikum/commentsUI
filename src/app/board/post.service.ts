import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { JwtHttp } from 'ng2-ui-auth';

import { environment } from '../../environments/environment';
import { Post } from '../shared/models/post.model';
import { PartialList } from '../shared/partial-list';


@Injectable()
export class PostService {

    private postsUrl = environment.apiBaseUrl + '/boards/posts/';

    constructor(private http: JwtHttp) { }

    list(params: any): Observable<PartialList<Post>> {
        return this.http.get(this.postsUrl).map((response: Response) => {
            return new PartialList<Post>(Post, response.json());
        });
    }
}
