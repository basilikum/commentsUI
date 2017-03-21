import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../shared/models/post.model';

@Component({
    selector: 'cmm-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

    @Input() post: Post;

    constructor() { }

    ngOnInit() {
    }
}
