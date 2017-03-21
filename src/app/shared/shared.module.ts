import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataService } from './data.service';
import { UserLabelComponent } from './user-label/user-label.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        DataService
    ],
    exports: [
        CommonModule,
        UserLabelComponent
    ],
    declarations: [
        UserLabelComponent
    ]
})
export class SharedModule {}
