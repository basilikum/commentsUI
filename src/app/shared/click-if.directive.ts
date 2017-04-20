import { Directive, HostListener, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import  { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Directive({
    selector: '[cmmClickIf]'
})
export class ClickIfDirective {

    @Output() cmmClick = new EventEmitter();
    @Output() cmmClickElse = new EventEmitter();
    @HostListener('click', ['$event']) onClick(event) {
        if (this.auth.isAuthenticated()) {
            this.cmmClick.next(event);
        } else {
            this.cmmClickElse.next(event);
            event.preventDefault();
        }
    }

    @ViewChild('p') public popover: NgbPopover;

    constructor(private auth: AuthService) { }
}
