import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { IsLoggedIn } from './auth/is-logged-in.guard';
import { IsLoggedOut } from './auth/is-logged-out.guard';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [],
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
