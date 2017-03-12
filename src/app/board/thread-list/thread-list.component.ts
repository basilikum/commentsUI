import { Component, OnInit, Input } from '@angular/core';

import { Thread } from '../../shared/models/thread.model';
import { PartialList } from '../../shared/partial-list';
import { BoardService } from '../board.service';

@Component({
    selector: 'cmm-thread-list',
    templateUrl: './thread-list.component.html',
    styleUrls: ['./thread-list.component.less']
})
export class ThreadListComponent implements OnInit {

    @Input() boardId: string;

    threadList: PartialList<Thread>;

    constructor(private boardService: BoardService) { }

    ngOnInit() {
        this.boardService
            .getThreadList(this.boardId)
            .subscribe((threadList: PartialList<Thread>) => {
            this.threadList = threadList;
            console.log(this.threadList);
        });
    }
}
