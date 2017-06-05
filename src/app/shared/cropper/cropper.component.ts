import { Component, OnInit, OnChanges, AfterViewInit, Input, Output, ElementRef, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';

import { CropData } from './crop-data';

declare let Cropper: any;
declare let Croppie: any;


@Component({
    selector: 'cmm-cropper',
    templateUrl: './cropper.component.html',
    styleUrls: ['./cropper.component.less']
})
export class CropperComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() src: string;
    @Input() preview: any;
    @Output() cropped : EventEmitter<CropData> = new EventEmitter<CropData>();

    @ViewChild('cropEl') cropEl: ElementRef;

    private cropper: any;

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['src'].currentValue !== changes['src'].previousValue && !changes['src'].firstChange) {
            this.cropper.bind({
                url: changes['src'].currentValue
            });
        }
    }

    ngAfterViewInit() {
        this.cropper = new Croppie(this.cropEl.nativeElement, {
            boundary: { width: 500, height: 500 },
            viewport: { width: 256, height: 256, type: 'square' },
            update: this.emitCropData.bind(this)
        });
        this.cropper.bind({
            url: this.src
        });
    }

    private emitCropData() {
        const data = this.cropper.get();
        console.log(data);
        this.cropped.emit({
            x: parseInt(data.points[0], 10),
            y: parseInt(data.points[1], 10),
            size: parseInt(data.points[2], 10) - parseInt(data.points[0], 10)
        });
    }
}
