import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../shared/models/post.model';
import { VoteData } from '../../shared/models/vote-data.model';
import { PartialList } from '../../shared/partial-list';
import { PostService } from '../post.service';

@Component({
    selector: 'cmm-vote-handle',
    templateUrl: './vote-handle.component.html',
    styleUrls: ['./vote-handle.component.less']
})
export class VoteHandleComponent implements OnInit {

    @Input() post: Post;

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
    }

    voteUp() {
        this.vote(this.post.votes.own === 1 ? 0 : 1);
    }

    voteDown() {
        this.vote(this.post.votes.own === -1 ? 0 : -1);
    }

    private vote(value: number) {
        this.postService.vote(this.post, value).subscribe((votes: VoteData) => {
            this.post.votes = votes;
        });
    }
}
