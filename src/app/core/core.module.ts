import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { IsLoggedIn } from './auth/is-logged-in.guard';
import { IsLoggedOut } from './auth/is-logged-out.guard';
import { IsActive } from './auth/is-active.guard';
import { IsInactive } from './auth/is-inactive.guard';
import { HasValidUrlParam } from './has_valid_url_param.guard';
import { UserLoginLinkComponent } from './user-login-link/user-login-link.component';
import { AvatarService } from './avatar.service';
import { HelperService } from './helper.service';
import { UserService } from './user.service';
import { FormsService } from './forms.service';
import { PostService } from './post.service';
import { VoteService } from './vote.service';
import { PostDeleteConfirmModalComponent } from './post-delete-confirm-modal/post-delete-confirm-modal.component';


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
        UserLoginLinkComponent,
        PostDeleteConfirmModalComponent
    ],
    providers: [
        IsLoggedIn,
        IsLoggedOut,
        IsActive,
        IsInactive,
        HasValidUrlParam,
        AvatarService,
        HelperService,
        UserService,
        FormsService,
        PostService,
        VoteService
    ],
    entryComponents: [
        PostDeleteConfirmModalComponent
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
 }
