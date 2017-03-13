import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'cmm-board-not-found',
    templateUrl: './board-not-found.component.html',
    styleUrls: ['./board-not-found.component.less']
})
export class BoardNotFoundComponent implements OnInit {

    url: string = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.url = this.route.snapshot.queryParams['url'] || '';
    }

}
