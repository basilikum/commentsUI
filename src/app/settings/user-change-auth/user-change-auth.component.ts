import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../shared/models/user.model';


@Component({
    selector: 'cmm-user-change-auth',
    templateUrl: './user-change-auth.component.html',
    styleUrls: ['./user-change-auth.component.less']
})
export class UserChangeAuthComponent implements OnInit {

    @Input() user: User;

    constructor() { }

    ngOnInit() {
    }

}
