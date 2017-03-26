import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Board } from '../shared/models/board.model';

@Component({
    selector: 'cmm-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit, OnDestroy {

    private dataSub : Subscription;

    board: Board;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.dataSub = this.route.data.subscribe((data: { board: Board }) => {
            console.log('new board', data.board);
            this.board = data.board;
        });
    }

    ngOnDestroy() {
        console.log('destroy');
        this.dataSub.unsubscribe();
    }
}
