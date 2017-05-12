import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../models/board.model';

@Component({
    selector: 'cmm-where',
    templateUrl: './where.component.html',
    styleUrls: ['./where.component.less']
})
export class WhereComponent implements OnInit {
    @Input() board: Board;
    @Input() url: string;

    constructor() { }

    ngOnInit() {
    }
}
