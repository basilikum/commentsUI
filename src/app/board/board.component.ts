import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../shared/models/board.model';

@Component({
    selector: 'cmm-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

    board: Board;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.board = this.route.snapshot.data['board'];
        console.log(this.board);
    }
}
