import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Post } from '../../shared/models/post.model';

import { PostService } from '../post.service';

@Component({
  selector: 'cmm-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.less']
})
export class PostEditComponent implements OnInit {

    @Input() post: Post;
    @Input() title: string;
    @Output() close = new EventEmitter();
    @Output() edit = new EventEmitter();

    postEditForm: FormGroup;
    showAlert = false;

    private storageKey: string;

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService
    ) { }

    cancel() {
        this.close.emit(this.postEditForm.value.message);
    }

    ngOnInit() {
        this.storageKey = 'cmm-post-edit-' + this.post.id;
        this.initForm();
    }

    ngOnDestroy() {
        if (this.postEditForm.dirty) {
            this.setText(this.postEditForm.value.message);
        } else {
            this.unsetText();
        }

    }

    reset() {
        this.postEditForm.reset();
        this.postEditForm.setValue({message: this.post.text});
        this.showAlert = false;
    }

    submit() {
        this.postService.update(this.post, {
            text: this.postEditForm.value.message
        }).subscribe((post: Post) => {
            this.postEditForm.reset();
            this.edit.emit(post);
        });
    }

    private getText() : string {
        return localStorage.getItem(this.storageKey) || this.post.text;
    }

    private initForm() {
        const text = this.getText();
        this.postEditForm = this.formBuilder.group({
            message: [text, [Validators.required, Validators.maxLength(65536)]]
        });
        if (text !== this.post.text) {
            this.showAlert = true;
            this.postEditForm.markAsDirty();
        }
    }

    private setText(text: string) {
        localStorage.setItem(this.storageKey, text);
    }

    private unsetText() {
        localStorage.removeItem(this.storageKey);
    }
}
