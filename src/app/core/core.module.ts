import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { IsLoggedIn } from './auth/is-logged-in.guard';
import { IsLoggedOut } from './auth/is-logged-out.guard';
import { HasValidUrlParam } from './has_valid_url_param.guard';
import { UserLoginLinkComponent } from './user-login-link/user-login-link.component';
import { HelperService } from './helper.service';

@NgModule({
    imports: [
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
        IsLoggedIn,
        IsLoggedOut,
        HasValidUrlParam,
        HelperService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
 }
