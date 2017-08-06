import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { VoteData } from '../shared/models/vote-data.model';

import { HelperService } from './helper.service';
import { HttpService } from './http.service';


@Injectable()
export class VoteService {

    private votesUrl = environment.apiBaseUrl + '/votes/';

    constructor(
        private http: HttpService,
        private helperService: HelperService
    ) { }

    vote(voteData: VoteData, value: number): Observable<VoteData> {
        const data = { own: value };
        return this.http.patch(this.votesUrl + voteData.id + '/', data).map((response: Response) => {
            return new VoteData(response.json());
        });
    }
}
