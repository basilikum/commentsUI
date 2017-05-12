import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cmm-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.less']
})
export class WhenComponent implements OnInit {
    @Input() date: Date;

    constructor() { }

    ngOnInit() {
    }
}
