import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Post } from '../../shared/models/post.model';

import { PostService } from '../../core/post.service';

@Component({
    selector: 'cmm-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.less']
})
export class PostCreateComponent implements OnInit, OnDestroy {

    @Input() origin: Post;
    @Output() close = new EventEmitter();
    @Output() create = new EventEmitter();

    postCreateForm: FormGroup;

    private storageKey: string;

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService
    ) { }

    cancel() {
        this.close.emit(this.postCreateForm.value.message);
    }

    ngOnInit() {
        this.storageKey = 'cmm-post-create-origin-' + this.origin.id;
        this.initForm();
    }

    ngOnDestroy() {
        this.setText(this.postCreateForm.value.message);
    }

    submit() {
        this.postService.create({
            text: this.postCreateForm.value.message,
            origin: this.origin.id,
            site: 'aaaaaaa'
        }).subscribe((post: Post) => {
            this.postCreateForm.reset();
            this.create.emit(post);
        });
    }

    private getText() : string {
        return localStorage.getItem(this.storageKey) || '';
    }

    private initForm() {
        this.postCreateForm = this.formBuilder.group({
            message: [this.getText(), [Validators.required, Validators.maxLength(65536)]]
        });
    }

    private setText(text: string) {
        if (text) {
            localStorage.setItem(this.storageKey, text);
        } else {
            localStorage.removeItem(this.storageKey);
        }
    }
}
