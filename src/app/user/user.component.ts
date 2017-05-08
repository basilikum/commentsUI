import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { User } from '../shared/models/user.model';

@Component({
    selector: 'cmm-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit, OnDestroy {

    user: User;

    private dataSub: Subscription;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.dataSub = this.route.data.subscribe((data: { user: User }) => {
            this.user = data.user;
        });
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
    }
}
