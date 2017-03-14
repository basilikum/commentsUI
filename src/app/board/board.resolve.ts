import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BoardService } from './board.service';
import { Board } from '../shared/models/board.model';

@Injectable()
export class BoardResolve implements Resolve<Board> {

    constructor(
        private boardService: BoardService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        const url = route.queryParams['url'];
        return this.boardService.getBoardByUrl(url);
    }
}
