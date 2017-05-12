import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { JwtHttp } from 'ng2-ui-auth';

import { environment } from '../../environments/environment';
import { VoteData } from '../shared/models/vote-data.model';

import { HelperService } from '../core/helper.service';


@Injectable()
export class VoteService {

    private votesUrl = environment.apiBaseUrl + '/votes/';

    constructor(
        private http: JwtHttp,
        private helperService: HelperService
    ) { }

    vote(voteData: VoteData, value: number): Observable<VoteData> {
        const data = { own: value };
        return this.http.patch(this.votesUrl + voteData.id + '/', data).map((response: Response) => {
            return new VoteData(response.json());
        });
    }
}
