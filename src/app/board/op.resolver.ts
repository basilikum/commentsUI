import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Post } from '../shared/models/post.model';
import { PartialList } from '../shared/partial-list';

import { PostService } from '../core/post.service';


@Injectable()
export class OPResolver implements Resolve<Post> {

    constructor(private postService: PostService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
        return this.postService.list({
            parent__isnull: true,
            thread: route.params['id']
        }).map((postList: PartialList<Post>) => {
            return postList.results[0];
        });
    }
}
