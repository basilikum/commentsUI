import { Component, OnInit, Input } from '@angular/core';

import { VoteData } from '../../shared/models/vote-data.model';
import { VoteService } from '../../core/vote.service';

@Component({
    selector: 'cmm-vote-handle',
    templateUrl: './vote-handle.component.html',
    styleUrls: ['./vote-handle.component.less']
})
export class VoteHandleComponent implements OnInit {

    @Input() voteData: VoteData;
    @Input() readOnly: false;

    constructor(
        private voteService: VoteService
    ) { }

    ngOnInit() {
    }

    voteUp() {
        this.vote(this.voteData.own === 1 ? 0 : 1);
    }

    voteDown() {
        this.vote(this.voteData.own === -1 ? 0 : -1);
    }

    private vote(value: number) {
        if (this.readOnly) {
            return;
        }
        this.voteService.vote(this.voteData, value).subscribe((voteData: VoteData) => {
            this.voteData = voteData;
        });
    }
}
