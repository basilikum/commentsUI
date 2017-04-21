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
        UserLabelComponent,
        PaginationComponent,
        CountdownTimerComponent,
        ClickIfAuthDirective,
        SelectQueryParamComponent
    ],
    declarations: [
        UserLabelComponent,
        PaginationComponent,
        CountdownTimerComponent,
        ClickIfAuthDirective,
        LoginRequiredModalComponent,
        SelectQueryParamComponent
    ],
    entryComponents: [
        LoginRequiredModalComponent
    ]
})
export class SharedModule {}
