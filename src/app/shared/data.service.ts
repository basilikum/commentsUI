import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { Board } from './models/board.model';

@Injectable()
export class DataService {

    private boardsUrl = environment.apiBaseUrl + '/boards/';

    constructor(private http: Http) { }

    getOrCreateBoard(url: string): Observable<Board> {
        return this.getBoard(url).catch(error => {
            return this.createBoard(url);
        });
    }

    getBoard(url: string): Observable<Board> {
        return this.http.get(this.boardsUrl + '?url=' + url).map(
            (response: Response) => response.json()
        );
    }

    createBoard(url: string): Observable<Board> {
        return this.http.post(this.boardsUrl, { url: url }).map(
            (response: Response) => response.json()
        );
    }
}
