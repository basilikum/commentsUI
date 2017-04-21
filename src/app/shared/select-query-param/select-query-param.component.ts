import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cmm-select-query-param',
    templateUrl: './select-query-param.component.html',
    styleUrls: ['./select-query-param.component.less']
})
export class SelectQueryParamComponent implements OnInit {

    @Input() selected: string;
    @Input() options: [{param: string, label: string}];
    @Input() paramName: string;
    @Input() label = '';
    @Input() extras: any = {};

    private id = 'op' + Math.floor(Math.random() * 1000000);

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    changed(event) {
        let queryParams = {};
        queryParams[this.paramName] = event.target.value;
        this.router.navigate([], {
            queryParams: Object.assign(queryParams, this.extras),
            queryParamsHandling: 'merge'
        });
    }
}
