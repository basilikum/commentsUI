import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
    @Input() openable = false;
    @Output() opened = new EventEmitter();
    @Output() replyOpened = new EventEmitter();
    @Output() replyClosed = new EventEmitter();
    @Output() postCreated = new EventEmitter();

    replyForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    reply() {
        if (this.post.showReplyForm) {
            return;
        }
        this.post.showReplyForm = true;
        this.replyOpened.emit(this.post);
    }

    cancelReply() {
        this.post.showReplyForm = false;
        this.replyClosed.emit(this.post);
    }

    submitReply() {
        this.postService.create({
            text: this.replyForm.value.message,
            origin: this.post.id,
            site: 'aaaaaaa'
        }).subscribe((post: Post) => {
            this.post.showReplyForm = false;
            this.postCreated.emit(post);
        });
    }

    toggleAnswers() {
        this.post.showChildren = !this.post.showChildren;
        if (this.post.showChildren) {
            this.opened.emit(this.post);
        }
    }

    private initForm() {
        this.replyForm = this.formBuilder.group({
            message: ['', [Validators.required, Validators.maxLength(65536)]]
        });
    }
}
