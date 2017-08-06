import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http} from "@angular/http";
import { Observable } from "rxjs/Rx";


@Injectable()
export class InterceptedHttp extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        if (options) {
            this.removeEmptyHeaders(options);
        }
        return super.request(url, options);
    }

    private removeEmptyHeaders(options: RequestOptionsArgs) {
        const toDel = [];
        options.headers.forEach((values, name) => {
            if (!values[0]) {
                toDel.push(name);
            }
        });
        toDel.forEach((header) => {
            options.headers.delete(header);
        });
    }
}
