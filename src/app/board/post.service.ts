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

    get(id: string): Observable<Post> {
        return this.http.get(this.postsUrl + id + '/').map((response: Response) => {
            return new Post(response.json());
        });
    }

    list(params: any): Observable<PartialList<Post>> {
        const qs = this.helperService.formatQueryParams(params);
        return this.http.get(this.postsUrl + '?' + qs).map((response: Response) => {
            return new PartialList<Post>(Post, response.json());
        });
    }

    children(post: Post): Observable<Post[]> {
        return this.http.get(this.postsUrl + post.id + '/children/').map((response: Response) => {
            let posts = response.json().map(data => new Post(data));
            post.numberOfChildren = posts.length;
            return posts;
        });
    }

    create(data: any): Observable<Post> {
        return this.http.post(this.postsUrl, data).map((response: Response) => {
            return new Post(response.json());
        });
    }

    update(post: Post, data: any): Observable<Post> {
        return this.http.patch(this.postsUrl + post.id + '/', data).map((response: Response) => {
            return new Post(response.json());
        });
    }

    remove(post: Post): Observable<boolean> {
        return this.http.delete(this.postsUrl + post.id + '/').map((response: Response) => {
            return true;
        });
    }
}
