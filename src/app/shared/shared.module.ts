import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './data.service';
import { UserLabelComponent } from './user-label/user-label.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ClickIfAuthDirective } from './click-if-auth.directive';
import { LoginRequiredModalComponent } from './login-required-modal/login-required-modal.component';
import { SelectQueryParamComponent } from './select-query-param/select-query-param.component';
import { AutoLinksPipe } from './auto-links.pipe';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import { AutofocusDirective } from './autofocus.directive';
import { ElapsedPipe } from './elapsed.pipe';
import { ActivationRequiredModalComponent } from './activation-required-modal/activation-required-modal.component';
import { ShortNumberPipe } from './short-number.pipe';
import { WhoComponent } from './who/who.component';
import { WhenComponent } from './when/when.component';
import { WhereComponent } from './where/where.component';
import { VoteHandleComponent } from './vote-handle/vote-handle.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserAvatarSelectComponent } from './user-avatar-select/user-avatar-select.component';
import { CropperComponent } from './cropper/cropper.component';



@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        RouterModule
    ],
    providers: [
        DataService
    ],
    exports: [
        CommonModule,

        CountdownTimerComponent,
        CropperComponent,
        PaginationComponent,
        RecaptchaComponent,
        SelectQueryParamComponent,
        UserLabelComponent,
        WhoComponent,
        WhenComponent,
        WhereComponent,
        UserAvatarComponent,
        UserAvatarSelectComponent,
        VoteHandleComponent,

        AutofocusDirective,
        ClickIfAuthDirective,

        AutoLinksPipe,
        ElapsedPipe,
        ShortNumberPipe
    ],
    declarations: [
        ActivationRequiredModalComponent,
        CountdownTimerComponent,
        CropperComponent,
        LoginRequiredModalComponent,
        PaginationComponent,
        RecaptchaComponent,
        SelectQueryParamComponent,
        UserLabelComponent,
        WhoComponent,
        WhenComponent,
        WhereComponent,
        UserAvatarComponent,
        UserAvatarSelectComponent,
        VoteHandleComponent,

        AutofocusDirective,
        ClickIfAuthDirective,

        AutoLinksPipe,
        ElapsedPipe,
        ShortNumberPipe
    ],
    entryComponents: [
        ActivationRequiredModalComponent,
        LoginRequiredModalComponent
    ]
})
export class SharedModule {}
