import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    constructor() { }

    isUrl(url: string) : boolean {
        return this.urlRegex.test(url);
    }
}
