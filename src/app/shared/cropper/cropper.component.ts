import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { CropData } from './crop-data';

declare let Cropper: any;

@Component({
    selector: 'cmm-cropper',
    templateUrl: './cropper.component.html',
    styleUrls: ['./cropper.component.less']
})
export class CropperComponent implements OnInit, AfterViewInit {
    @Input() src: string;
    @Input() preview: any;
    @Output() cropped : EventEmitter<CropData> = new EventEmitter<CropData>();

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
            viewMode: 1,
            cropend: (evt) => {
                this.emitCropData();
            },
            ready: (evt) => {
                this.emitCropData();
            }
        });
    }

    private emitCropData() {
        const data = this.cropper.getData();
        this.cropped.emit({
            x: Math.round(data.x),
            y: Math.round(data.y),
            size: Math.round(data.width)
        });
    }
}
