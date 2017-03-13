import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { HelperService } from '../core/helper.service';

@Injectable()
export class HasValidUrlParam implements CanActivate {

    constructor(
        private helperService: HelperService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (!this.helperService.isUrl(route.queryParams['url'])) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
