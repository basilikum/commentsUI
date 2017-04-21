import { Directive, HostListener, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginRequiredModalComponent } from './login-required-modal/login-required-modal.component';

@Directive({
    selector: '[cmmClickIfAuth]'
})
export class ClickIfAuthDirective {

    @Output() cmmClickIfAuth = new EventEmitter();
    @HostListener('click', ['$event']) onClick(event) {
        if (this.auth.isAuthenticated()) {
            this.cmmClickIfAuth.next(event);
        } else {
            const modalRef = this.modalService.open(LoginRequiredModalComponent);
            event.preventDefault();
        }
    }

    constructor(
        private auth: AuthService,
        private modalService: NgbModal
    ) { }
}
