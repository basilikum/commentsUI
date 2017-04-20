import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './data.service';
import { UserLabelComponent } from './user-label/user-label.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ClickIfDirective } from './click-if.directive';


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
        ClickIfDirective
    ],
    declarations: [
        UserLabelComponent,
        PaginationComponent,
        CountdownTimerComponent,
        ClickIfDirective
    ]
})
export class SharedModule {}
