import { Injectable } from '@angular/core';

import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { JwtHttp } from 'ng2-ui-auth';

import { Observable } from 'rxjs/Rx';


export interface TCRequestOptionsArgs extends RequestOptionsArgs {
    excludeToken?: boolean,
    autoRefreshToken?: boolean
}

@Injectable()
export class HttpService {

    private defaultHeaders = {'Content-Type': 'application/json'};

    constructor(
        private http: Http,
        private jwtHttp: JwtHttp
    ) { }

    get(url: string, options?: TCRequestOptionsArgs): Observable<Response> {
        options = options || {};
        const excluded = this.tokenExcluded(options);
        if (excluded) {
            return this.http.get(url, options);
        } else {
            return this.jwtHttp.get(url, options);
        }
    }

    post(url: string, body: any, options?: TCRequestOptionsArgs): Observable<Response> {
        options = options || {};
        const excluded = this.tokenExcluded(options);
        if (excluded) {
            return this.http.post(url, body, options);
        } else {
            return this.jwtHttp.post(url, body, options);
        }
    }

    put(url: string, body: any, options?: TCRequestOptionsArgs): Observable<Response> {
        options = options || {};
        const excluded = this.tokenExcluded(options);
        if (excluded) {
            return this.http.put(url, body, options);
        } else {
            return this.jwtHttp.put(url, body, options);
        }
    }

    delete(url: string, options?: TCRequestOptionsArgs): Observable<Response> {
        options = options || {};
        const excluded = this.tokenExcluded(options);
        if (excluded) {
            return this.http.delete(url, options);
        } else {
            return this.jwtHttp.delete(url, options);
        }
    }

    patch(url: string, body: any, options?: TCRequestOptionsArgs): Observable<Response> {
        options = options || {};
        const excluded = this.tokenExcluded(options);
        if (excluded) {
            return this.http.patch(url, body, options);
        } else {
            return this.jwtHttp.patch(url, body, options);
        }
    }

    head(url: string, options?: TCRequestOptionsArgs): Observable<Response> {
        options = options || {};
        const excluded = this.tokenExcluded(options);
        if (excluded) {
            return this.http.head(url, options);
        } else {
            return this.jwtHttp.head(url, options);
        }
    }

    private tokenExcluded(options: TCRequestOptionsArgs): boolean {
        let excluded = false;
        if ('excludeToken' in options) {
            excluded = options.excludeToken;
            delete options.excludeToken;
        }
        return excluded;
    }
}
