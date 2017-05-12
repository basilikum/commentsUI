import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../shared/models/post.model';


@Component({
    selector: 'cmm-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.less']
})
export class UserPostComponent implements OnInit {

    @Input() post: Post;

    constructor() { }

    ngOnInit() {
    }
}
