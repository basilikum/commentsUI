import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cmm-activation-required-modal',
    templateUrl: './activation-required-modal.component.html',
    styleUrls: ['./activation-required-modal.component.less']
})
export class ActivationRequiredModalComponent implements OnInit {

    constructor(
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
    }
}
