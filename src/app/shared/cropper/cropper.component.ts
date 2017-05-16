import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';

declare let Cropper: any;

@Component({
    selector: 'cmm-cropper',
    templateUrl: './cropper.component.html',
    styleUrls: ['./cropper.component.less']
})
export class CropperComponent implements OnInit, AfterViewInit {
    @Input() src: string;
    @Input() preview: any;

    @ViewChild('imgEl') imgEl;

    private cropper: any;

    constructor() { }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.cropper = new Cropper(this.imgEl.nativeElement, {
            aspectRatio: 1,
            preview: this.preview,
            zoomable: false,
            rotatable: false,
            scalable: false,
            movable: false,
            viewMode: 1
        });
    }
}
