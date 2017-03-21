import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Board } from '../../shared/models/board.model';
import { Thread } from '../../shared/models/thread.model';
import { PartialList } from '../../shared/partial-list';

import { BoardService } from '../board.service';



@Component({
    selector: 'cmm-thread-list',
    templateUrl: './thread-list.component.html',
    styleUrls: ['./thread-list.component.less']
})
export class ThreadListComponent implements OnInit {

    private sub: Subscription;
    private page = 1;

    board: Board;
    threadList: PartialList<Thread>;

    constructor(
        private boardService: BoardService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe((params: { page: number }) => {
            this.page = params.page;
            if (this.board) {
                this.update();
            }
        });
        this.sub = this.route.data.subscribe((data: { board: Board }) => {
            this.board = data.board;
            this.update();
        });
    }

    private update() {
        this.boardService
            .getThreadList(this.board.id, this.page)
            .subscribe((threadList: PartialList<Thread>) => {
            this.threadList = threadList;
        });
    }
}
