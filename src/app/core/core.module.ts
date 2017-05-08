import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { AuthService } from './auth/auth.service';
import { IsLoggedIn } from './auth/is-logged-in.guard';
import { IsLoggedOut } from './auth/is-logged-out.guard';
import { IsActive } from './auth/is-active.guard';
import { IsInactive } from './auth/is-inactive.guard';
import { HasValidUrlParam } from './has_valid_url_param.guard';
import { UserLoginLinkComponent } from './user-login-link/user-login-link.component';
import { HelperService } from './helper.service';
import { UserService } from './user.service';
import { FormsService } from './forms.service';

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        UserLoginLinkComponent
    ],
    declarations: [
        UserLoginLinkComponent
    ],
    providers: [
        AuthService,
        IsLoggedIn,
        IsLoggedOut,
        IsActive,
        IsInactive,
        HasValidUrlParam,
        HelperService,
        UserService,
        FormsService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
 }
