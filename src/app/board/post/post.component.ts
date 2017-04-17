import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../shared/models/post.model';

import { PartialList } from '../../shared/partial-list';
import { PostService } from '../post.service';

@Component({
    selector: 'cmm-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

    @Input() post: Post;
    @Input() title: string = '';
    @Input() externalChildHandling: boolean = false;
    @Output() create = new EventEmitter();
    @Output() remove = new EventEmitter();

    childrenVisible = false;
    createFormVisible = false;
    editFormVisible = false;
    children: Post[] = [];

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
    }

    showCreateForm() {
        this.editFormVisible = false;
        this.createFormVisible = true;
    }

    showEditForm() {
        this.createFormVisible = false;
        this.editFormVisible = true;
    }

    deletePost() {
        this.remove.emit(this.post);
    }

    postCreated(post: Post) {
        this.createFormVisible = false;
        if (this.externalChildHandling) {
            this.create.emit(post);
        } else {
            this.refresh();
        }
    }

    postCreateClosed(text: string) {
        this.createFormVisible = false;
    }

    postEdited(post: Post) {
        this.editFormVisible = false;
        this.post.text = post.text;
    }

    postEditClosed(text: string) {
        this.editFormVisible = false;
    }

    toggleChildren() {
        this.childrenVisible = !this.childrenVisible;
        if (this.childrenVisible && this.children.length != this.post.numberOfChildren) {
            this.loadChildren();
        }
    }

    refresh() {
        this.postService.get(this.post.id).subscribe((post: Post) => {
            this.post = post;
            this.loadChildren();
            this.childrenVisible = true;
        });
    }

    private loadChildren() {
        this.postService.children(this.post).subscribe((posts: Post[]) => {
            this.children = posts;
        });
    }
}
