import { Directive, ElementRef, Input } from '@angular/core';

declare let Cropper: any;

@Directive({
    selector: '[cmmCropper]'
})
export class CropperDirective {
    @Input() options: any = {};
    @Input() preview: ElementRef;

    private cropper;

    constructor(
        private _element: ElementRef
    ) { }

    ngOnInit() {
        console.log(Cropper, this._element.nativeElement.getAttribute('src'));
        setTimeout(() => {
            console.log(Cropper, this._element.nativeElement.getAttribute('src'));
            console.log(this.preview);
            this.cropper = new Cropper(this._element.nativeElement, {
                aspectRatio: 1,
                preview: this.preview,
                zoomable: false,
                rotatable: false,
                scalable: false,
                movable: false,
                viewMode: 1
            });
        }, 1000);
    }
}
