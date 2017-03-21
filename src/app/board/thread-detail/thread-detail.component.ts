import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Board } from '../../shared/models/board.model';
import { Thread } from '../../shared/models/thread.model';
import { Post } from '../../shared/models/post.model';
import { PartialList } from '../../shared/partial-list';

import { PostService } from '../post.service';


@Component({
  selector: 'cmm-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.less']
})
export class ThreadDetailComponent implements OnInit {

    private dataSub : Subscription;
    private paramsSub : Subscription;
    private page = 1;

    board: Board;
    thread: Thread;
    postList: PartialList<Post>;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService
    ) { }

    ngOnInit() {
        this.board = this.route.snapshot.parent.data['board'];
        this.dataSub = this.route.data.subscribe((data: { thread: Thread }) => {
            this.thread = data.thread;
        });
        this.paramsSub = this.route.queryParams.subscribe((params: { page: number }) => {
            this.page = params.page;
            if (this.thread) {
                this.update();
            }
        });
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
        this.paramsSub.unsubscribe();
    }

    private update() {
        this.postService.list({
            parent: this.thread.post.id,
            page: this.page || 1
        }).subscribe((postList: PartialList<Post>) => {
            this.postList = postList;
        });
    }
}
