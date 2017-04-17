import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'cmm-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: ['./countdown-timer.component.less']
})
export class CountdownTimerComponent implements OnInit {

    @Input() seconds = 0;
    @Input() total = 100;
    @Output() stop = new EventEmitter();
    @Output() update = new EventEmitter();

    backgroundImage: SafeStyle;
    tipContent = '';

    private startDate: Date;
    private timer;

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.startTimer();
    }

    private startTimer() {
        this.startDate = new Date();
        this.interval();
        this.timer = setInterval(() => {
            this.interval();
        }, 1000);
    }

    private interval() {
        const d = new Date();
        const passed = (d.valueOf() - this.startDate.valueOf()) / 1000;
        const perc = (this.total - this.seconds + passed) / this.total;
        if (perc >= 1) {
            clearInterval(this.timer);
            this.stop.emit();
        }
        this.updateCSS(perc);
        const currentTime = Math.round((1 - perc) * this.total);
        this.update.emit({
            done: this.total - currentTime,
            left: currentTime
        });
        const minutesLeft = Math.floor(currentTime / 60);
        const secondsLeft = currentTime % 60;
        this.tipContent = 'editable for ' + (minutesLeft > 0 ? minutesLeft + 'm and ' : '') + secondsLeft + 's';
    }

    private updateCSS(perc: number) {
        let color = 'white';
        if (perc > 0.5) {
            perc -= 0.5;
            color = '#31b0d5';
        }
        const deg = Math.round(90 + perc * 360);
        this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('linear-gradient(' + deg + 'deg, transparent 50%, ' + color + ' 50%),linear-gradient(90deg, white 50%, transparent 50%)');
    }
}
