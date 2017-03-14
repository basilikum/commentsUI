import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { BoardComponent } from './board.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { ThreadListComponent } from './thread-list/thread-list.component';

import { boardRouting } from './board.routing';
import { BoardResolve } from './board.resolve';


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
    providers: [
        BoardResolve
    ]
})
export class BoardModule {}
