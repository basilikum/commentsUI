import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Thread } from '../shared/models/thread.model';

import { BoardService } from './board.service';


@Injectable()
export class ThreadResolver implements Resolve<Thread> {

    constructor(private boardService: BoardService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Thread> {
        console.log('resolve thread');
        return this.boardService.getThread(route.params['id']);
    }
}
