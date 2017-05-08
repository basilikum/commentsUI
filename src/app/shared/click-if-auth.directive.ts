import { Directive, HostListener, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../core/user.service';

import { ActivationRequiredModalComponent } from './activation-required-modal/activation-required-modal.component';
import { LoginRequiredModalComponent } from './login-required-modal/login-required-modal.component';

@Directive({
    selector: '[cmmClickIfAuth]'
})
export class ClickIfAuthDirective {

    @Output() cmmClickIfAuth = new EventEmitter();
    @HostListener('click', ['$event']) onClick(event) {
        if (!this.auth.isAuthenticated()) {
            const modalRef = this.modalService.open(LoginRequiredModalComponent);
            event.preventDefault();
        } else if (!this.userService.isActive()) {
            const modalRef = this.modalService.open(ActivationRequiredModalComponent);
            event.preventDefault();
        } else {
            this.cmmClickIfAuth.next(event);
        }
    }

    constructor(
        private auth: AuthService,
        private userService: UserService,
        private modalService: NgbModal
    ) { }
}
