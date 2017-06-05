import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FileObj } from './file-obj';

@Component({
    selector: 'cmm-img-select',
    templateUrl: './img-select.component.html',
    styleUrls: ['./img-select.component.less']
})
export class ImgSelectComponent implements OnInit {

    @Output() select = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    imgSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.select.emit(new FileObj(file, reader.result));
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

}
