import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { AuthService as UIAuthService } from 'ng2-ui-auth';

@Injectable()
export class AuthService {

    private authUrl = environment.apiBaseUrl + '/auth/';

    constructor(
        private auth: UIAuthService,
        private http: Http
    ) { }

    register(regData: { username:string, email:string, password:string }) : Observable<boolean> {
        return this.http.post(this.authUrl + 'register/', regData).map((response: Response) => {
            this.auth.setToken(response.json().token);
            return true;
        });
    }

    userExists(username: string) : Observable<boolean> {
        return this.http.get(this.authUrl + 'user-exists/?username=' + username).map((response: Response) => {
            return response.json().exists;
        });
    }
}
