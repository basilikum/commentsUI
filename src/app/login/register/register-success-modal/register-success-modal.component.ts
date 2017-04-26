import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cmm-register-success-modal',
  templateUrl: './register-success-modal.component.html',
  styleUrls: ['./register-success-modal.component.less']
})
export class RegisterSuccessModalComponent implements OnInit {
    constructor(
      public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
    }
}
