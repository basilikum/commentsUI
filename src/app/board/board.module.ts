import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { BoardComponent } from './board.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { boardRouting } from "./board.routing";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        BoardComponent,
        ThreadDetailComponent,
        ThreadListComponent
    ],
    imports: [
        MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        boardRouting
    ],
})
export class BoardModule {}
