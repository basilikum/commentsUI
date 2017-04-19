import { Component, OnInit, Input } from '@angular/core';
import { VoteData } from '../../shared/models/vote-data.model';

@Component({
  selector: 'cmm-vote-results',
  templateUrl: './vote-results.component.html',
  styleUrls: ['./vote-results.component.less']
})
export class VoteResultsComponent implements OnInit {

    @Input() voteData: VoteData;

    constructor() { }

    ngOnInit() {
    }
}
