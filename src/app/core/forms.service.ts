import { Injectable } from '@angular/core';

@Injectable()
export class FormsService {

    constructor() { }


    isValid(form, field) {
        const control = form.controls[field];
        return control.touched && control.valid;
    }

    isInvalid(form, field) {
        const control = form.controls[field];
        return control.touched && control.invalid;
    }

    hasError(form, field: string, errorCodes: string[]) {
        const control = form.controls[field];
        return control.touched && errorCodes.some(errorCode => control.hasError(errorCode));
    }
}
