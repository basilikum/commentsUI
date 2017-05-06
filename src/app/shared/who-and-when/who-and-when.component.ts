import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../core/user.service';

import { User } from '../models/user.model';

@Component({
  selector: 'cmm-who-and-when',
  templateUrl: './who-and-when.component.html',
  styleUrls: ['./who-and-when.component.less']
})
export class WhoAndWhenComponent implements OnInit {
    @Input() user: User;
    @Input() date: Date;

    loggedInUser: User;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.loggedInUser = this.userService.getUser();
    }
}
