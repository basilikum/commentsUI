import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cmm-post-ordering',
    templateUrl: './post-ordering.component.html',
    styleUrls: ['./post-ordering.component.less']
})
export class PostOrderingComponent implements OnInit {

    @Input() ordering: string;

    orderOptions = [
        {
            param: '-modified',
            label: 'most recent'
        },
        {
            param: 'modified',
            label: 'least recent'
        },
        {
            param: '-vote_entity__total',
            label: 'highest rating'
        },
        {
            param: 'vote_entity__total',
            label: 'lowest rating'
        },
        {
            param: '-number_of_children',
            label: 'longest conversation'
        },
        {
            param: 'number_of_children',
            label: 'shortest conversation'
        }
    ];

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    orderChanged(event) {
        this.router.navigate([], {
            queryParams: { page: 1, ordering: event.target.value},
            queryParamsHandling: 'merge'
        });
    }
}
