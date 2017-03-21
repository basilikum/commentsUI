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
                console.log(new Board(Object.assign(response.json(), {url: url})));
                return new Board(Object.assign(response.json(), {url: url}));
            }
        );
    }

    getThreadList(id: string, page: number): Observable<PartialList<Thread>> {
        var qs = '?b=' + id;
        if (page > 1) {
            qs += '&page=' + page;
        }
        return this.http.get(this.boardsUrl + 'threads/' + qs).map(
            (response: Response) => new PartialList<Thread>(Thread, response.json())
        );
    }

    createThread(url: string, title: string, message: string) {
        const data = {
            url: url,
            title: title,
            text: message
        };
        return this.http.post(this.boardsUrl + 'threads/', data).map(
            (response: Response) => new Thread(response.json())
        );
    }

    getThread(id: string): Observable<Thread> {
        return this.http.get(this.boardsUrl + 'threads/' + id + '/').map(
            (response: Response) => new Thread(response.json())
        );
    }
}
