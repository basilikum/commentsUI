import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Board } from '../../shared/models/board.model';
import { Thread } from '../../shared/models/thread.model';
import { Post } from '../../shared/models/post.model';

import { PostService } from '../../core/post.service';


@Component({
  selector: 'cmm-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.less']
})
export class ThreadDetailComponent implements OnInit {

    private dataSub : Subscription;
    private paramsSub : Subscription;

    page = 1;
    ordering = '-modified';

    board: Board;
    thread: Thread;
    post: Post;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.board = this.route.snapshot.parent.data['board'];
        this.dataSub = this.route.data.subscribe((data: { thread: Thread, post: Post }) => {
            this.thread = data.thread;
            this.post = data.post;
        });
        this.paramsSub = this.route.queryParams.subscribe((params: { page: number, ordering: string }) => {
            this.page = params.page || 1;
            this.ordering = params.ordering || '-modified';
        });
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
        this.paramsSub.unsubscribe();
    }

    childPostCreated(childPost: Post) {
        this.postService.get(this.post.id).subscribe((post: Post) => {
            this.post = post;
            this.ordering = '-modified';
            this.page = 1;
            this.router.navigate([], {
                queryParams: { page: this.page, ordering: this.ordering },
                queryParamsHandling: 'merge'
            });
        });
    }

    postRemoved(post: Post) {
        this.router.navigate(['../'], {
            queryParams: { url: this.board.url },
            relativeTo: this.route
        });
    }
}
