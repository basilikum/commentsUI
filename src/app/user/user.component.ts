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
    page = 1;
    ordering = '-created';

    private dSub: Subscription;
    private qSub: Subscription;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.qSub = this.route.queryParams.subscribe((params: { page: number, ordering: string }) => {
            this.page = params.page || 1;
            this.ordering = params.ordering || '-created';
        });
        this.dSub = this.route.data.subscribe((data: { user: User }) => {
            this.user = data.user;
        });
    }

    ngOnDestroy() {
        this.dSub.unsubscribe();
        this.qSub.unsubscribe();
    }
}
