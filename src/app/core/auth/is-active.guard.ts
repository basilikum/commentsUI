import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from 'ng2-ui-auth';

import { UserService } from '../user.service';


@Injectable()
export class IsActive implements CanActivate {

    constructor(private userService: UserService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        return this.userService.isActive();
    }
}
