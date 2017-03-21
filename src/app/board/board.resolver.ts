import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Board } from '../shared/models/board.model';

import { BoardService } from './board.service';


@Injectable()
export class BoardResolver implements Resolve<Board> {

    constructor(private boardService: BoardService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Board> {
        console.log('resolve', route.queryParams['url']);
        return this.boardService.getBoardByUrl(route.queryParams['url']);
    }
}
