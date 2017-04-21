import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cmm-login-required-modal',
    templateUrl: './login-required-modal.component.html',
    styleUrls: ['./login-required-modal.component.less']
})
export class LoginRequiredModalComponent implements OnInit {

    constructor(
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
    }
}
