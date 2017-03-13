import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { IsLoggedIn } from './auth/is-logged-in.guard';
import { IsLoggedOut } from './auth/is-logged-out.guard';
import { UserLoginLinkComponent } from './user-login-link/user-login-link.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        UserLoginLinkComponent
    ],
    declarations: [
        UserLoginLinkComponent
    ],
    providers: [
        IsLoggedIn,
        IsLoggedOut
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
 }
