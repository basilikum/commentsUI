import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { JwtHttp } from 'ng2-ui-auth';

import { environment } from '../../environments/environment';
import { Board } from '../shared/models/board.model';
import { Thread } from '../shared/models/thread.model';
import { PartialList } from '../shared/partial-list';


@Injectable()
export class BoardService {

    private boardsUrl = environment.apiBaseUrl + '/boards/';

    constructor(private http: JwtHttp) { }

    getBoard(id: string): Observable<Board> {
        return this.http.get(this.boardsUrl + id + '/').map(
            (response: Response) => new Board(response.json())
        );
    }

    getBoardByUrl(url: string): Observable<Board> {
        return this.http.get(this.boardsUrl + 'url/?url=' + url).map(
            (response: Response) => {
                return new Board(response.json());
            }
        );
    }

    getThreadList(id: string): Observable<PartialList<Thread>> {
        return this.http.get(this.boardsUrl + 'threads/?b=' + id).map(
            (response: Response) => new PartialList<Thread>(Thread, response.json())
        );
    }
}
