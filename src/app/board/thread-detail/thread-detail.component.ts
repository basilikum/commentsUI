import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Board } from '../../shared/models/board.model';
import { Thread } from '../../shared/models/thread.model';

import { BoardService } from '../board.service';


@Component({
  selector: 'cmm-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.less']
})
export class ThreadDetailComponent implements OnInit {

    private dataSub : Subscription;
    private paramsSub : Subscription;

    board: Board;
    thread: Thread;

    constructor(
        private route: ActivatedRoute,
        private boardService: BoardService
    ) { }

    ngOnInit() {
        this.board = this.route.snapshot.parent.data['board'];
        this.dataSub = this.route.data.subscribe((data: { thread: Thread }) => {
            this.thread = data.thread;
        });
        this.paramsSub = this.route.queryParams.subscribe((params: { page: number }) => {

        });
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
        this.paramsSub.unsubscribe();
    }

    private update() {
        this.boardService
            .getThreadList(this.board.id, this.page)
            .subscribe((threadList: PartialList<Thread>) => {
            this.threadList = threadList;
        });
    }
}
