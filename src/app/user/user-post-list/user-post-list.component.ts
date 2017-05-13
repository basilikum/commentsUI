import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Post } from '../../shared/models/post.model';
import { User } from '../../shared/models/user.model';
import { PartialList } from '../../shared/partial-list';

import { PostService } from '../../core/post.service';


@Component({
    selector: 'cmm-user-post-list',
    templateUrl: './user-post-list.component.html',
    styleUrls: ['./user-post-list.component.less']
})
export class UserPostListComponent implements OnInit {
    @Input() page: number;
    @Input() ordering: string;
    @Input() user: User;

    orderOptions = [
        {
            param: '-created',
            label: 'most recent'
        },
        {
            param: 'created',
            label: 'least recent'
        },
        {
            param: '-vote_entity__total,-vote_entity__plus',
            label: 'highest rating'
        },
        {
            param: 'vote_entity__total,vote_entity__plus',
            label: 'lowest rating'
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

    private update() {
        this.postService.list({
            complex: true,
            creator__uid: this.user.id,
            page: this.page || 1,
            ordering: this.ordering
        }).subscribe((postList: PartialList<Post>) => {
            this.postList = postList;
        });
    }
}
