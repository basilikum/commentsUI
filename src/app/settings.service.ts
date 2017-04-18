import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

    constructor() { }

    getLanguage() : string {
        return 'de-DE';
    }
}
