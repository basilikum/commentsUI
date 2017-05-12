import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cmm-post-delete-confirm-modal',
    templateUrl: './post-delete-confirm-modal.component.html',
    styleUrls: ['./post-delete-confirm-modal.component.less']
})
export class PostDeleteConfirmModalComponent implements OnInit {
    constructor(
      public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
    }
}
