import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
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
    private replyToPost: Post = null;
    private orderOptions = [
        {
            param: '-modified',
            label: 'active (most recent first)'
        },
        {
            param: 'modified',
            label: 'active (most recent last)'
        }
    ];

    board: Board;
    thread: Thread;
    post: Post;
    postList: PartialList<Post>;
    orderForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private postService: PostService
    ) { }

    ngOnInit() {
        this.board = this.route.snapshot.parent.data['board'];
        this.dataSub = this.route.data.subscribe((data: { thread: Thread, post: Post }) => {
            this.thread = data.thread;
            this.post = data.post;
        });
        this.paramsSub = this.route.queryParams.subscribe((params: { page: number }) => {
            this.page = params.page;
            if (this.post) {
                this.update();
            }
        });
        this.initForm();
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
        this.paramsSub.unsubscribe();
    }

    postOpened(post: Post) {
        console.log(post);
        this.loadChildren(post).subscribe((posts: Post[]) => {
            post.children = posts;
        });
    }

    replyOpened(post: Post) {
        if (this.replyToPost !== null && this.replyToPost !== post) {
            this.replyToPost.showReplyForm = false;
        }
        this.replyToPost = post;
    }

    replyClosed(post: Post) {

    }

    postCreated(post: Post) {
        const parent = this.findPost(post.parent);
        console.log('created', post, parent);
        if (parent) {
            this.loadChildren(parent).subscribe((posts: Post[]) => {
                parent.children = posts;
                if (!parent.children.find(p => p.id === post.id)) {
                    parent.children.push(post);
                }
                parent.showChildren = true;
            });
        }
    }

    private loadChildren(post: Post) : Observable<Post[]> {
        if (post.children.length >= post.numberOfChildren) {
            return Observable.of(post.children);
        }
        return this.postService.children(post);
    }

    private findPost(postId: string) {
        return this.postList.results.find((post: Post) => post.id === postId);
    }

    private update() {
        this.postService.list({
            parent: this.post.id,
            page: this.page || 1,
            ordering: '-created'
        }).subscribe((postList: PartialList<Post>) => {
            this.postList = postList;
        });
    }

    private initForm() {
        this.orderForm = this.formBuilder.group({
            order: ['-modified', Validators.required]
        });
    }
}
