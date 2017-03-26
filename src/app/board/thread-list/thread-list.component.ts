import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
export class ThreadListComponent implements OnInit, OnDestroy {

    private dSub: Subscription;
    private qSub: Subscription;
    private page = 1;

    board: Board;
    threadList: PartialList<Thread>;

    constructor(
        private boardService: BoardService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.qSub = this.route.queryParams.subscribe((params: { page: number }) => {
            if (!params.page || params.page === this.page) {
                return;
            }
            this.page = params.page;
            if (this.board) {
                this.update();
            }
        });
        this.dSub = this.route.parent.data.subscribe((data: { board: Board }) => {
            if (this.board === data.board) {
                return;
            }
            this.board = data.board;
            this.update();
        });
    }

    ngOnDestroy() {
        this.qSub.unsubscribe();
        this.dSub.unsubscribe();
    }

    private update() {
        this.boardService
            .getThreadList(this.board.id, this.page)
            .subscribe((threadList: PartialList<Thread>) => {
            this.threadList = threadList;
        });
    }
}
