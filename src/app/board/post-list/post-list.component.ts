import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Post } from '../../shared/models/post.model';
import { PartialList } from '../../shared/partial-list';

import { PostService } from '../post.service';

@Component({
    selector: 'cmm-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit, OnChanges {

    @Input() page: number;
    @Input() ordering: string;
    @Input() parent: Post;

    orderOptions = [
        {
            param: '-modified',
            label: 'most recent'
        },
        {
            param: 'modified',
            label: 'least recent'
        },
        {
            param: '-vote_entity__total',
            label: 'highest rating'
        },
        {
            param: 'vote_entity__total',
            label: 'lowest rating'
        },
        {
            param: '-number_of_children',
            label: 'longest conversation'
        },
        {
            param: 'number_of_children',
            label: 'shortest conversation'
        }
    ];

    postList: PartialList<Post>;

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
        this.update();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.update();
    }

    postRemoved(post: Post) {
        this.update();
    }

    private update() {
        this.postService.list({
            parent: this.parent.id,
            page: this.page || 1,
            ordering: this.ordering
        }).subscribe((postList: PartialList<Post>) => {
            this.postList = postList;
        });
    }
}
