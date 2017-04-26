import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var grecaptcha: any;

@Component({
    selector: 'cmm-recaptcha',
    templateUrl: './recaptcha.component.html',
    styleUrls: ['./recaptcha.component.less']
})
export class RecaptchaComponent implements OnInit {

    @Input() siteKey: string;
    @Input() theme: string;
    @Output() verify = new EventEmitter();

    constructor(private el: ElementRef) { }

    ngOnInit() {
        grecaptcha.render(this.el.nativeElement, {
            sitekey: this.siteKey,
            callback: this.verifyCallback.bind(this),
            theme: 'light'
        });
    }

    private verifyCallback(response) {
        this.verify.next(response);
    }
}
