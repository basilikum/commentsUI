import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { User } from '../shared/models/user.model';

import { UserService } from '../core/user.service';


@Injectable()
export class UserResolver implements Resolve<User> {

    constructor(private userService: UserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.userService.get(route.params['id']);
    }
}
