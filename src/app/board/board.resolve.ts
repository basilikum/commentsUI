import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BoardService } from './board.service';
import { Board } from '../shared/models/board.model';

@Injectable()
export class BoardResolve implements Resolve<Board> {

    constructor(
        private boardService: BoardService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        const url = route.queryParams['url'];
        return this.boardService.getOrCreateBoard(url);
    }
}
