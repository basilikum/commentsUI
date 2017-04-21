import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    constructor() { }

    isUrl(url: string) : boolean {
        return this.urlRegex.test(url);
    }

    formatQueryParams(params: any) : string {
        return Object.keys(params).filter(key => {
            return params[key] !== null && params[key] !== undefined;
        }).map(key => {
            let val = params[key];
            if (Array.isArray(val)) {
                return val.map(v => key + '=' + v).join('&');
            }
            return key + '=' + val;
        }).join('&');
    }
}
