import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../shared/models/post.model';
import { User } from '../../shared/models/user.model';

import { PostService } from '../post.service';
import { UserService } from '../../core/user.service';

@Component({
    selector: 'cmm-post-controls',
    templateUrl: './post-controls.component.html',
    styleUrls: ['./post-controls.component.less']
})
export class PostControlsComponent implements OnInit {

    @Input() post: Post;
    @Output() openCreateForm = new EventEmitter();
    @Output() openEditForm = new EventEmitter();
    @Output() remove = new EventEmitter();

    isCreator= false;
    secondsUntilFrozen = 0;

    constructor(
        private postService: PostService,
        private userService: UserService
    ) { }

    ngOnInit() {
        const user: User = this.userService.getUser();
        this.isCreator = user && user.id === this.post.creator.id;
        if (this.isCreator) {
            this.secondsUntilFrozen = 600 - ((new Date()).valueOf() - this.post.created.valueOf()) / 1000;
        }
    }

    showCreateForm() {
        this.openCreateForm.emit();
    }

    showEditForm() {
        this.openEditForm.emit();
    }

    deletePost() {
        this.postService.remove(this.post).subscribe((success) => {
            this.remove.emit();
        });
    }
}
