import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/models/user.model';
import { UserService } from '../core/user.service';

import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'cmm-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit, OnDestroy {

    user: User;

    private dataSub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.dataSub = this.route.data.subscribe((data: { me: User }) => {
            this.user = data.me;
        });
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
    }
}
