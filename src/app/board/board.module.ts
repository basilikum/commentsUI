import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { BoardComponent } from './board.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { ThreadListComponent } from './thread-list/thread-list.component';

import { boardRouting } from './board.routing';
import { BoardResolver } from './board.resolver';
import { ThreadResolver } from './thread.resolver';
import { OPResolver } from './op.resolver';
import { ThreadNewComponent } from './thread-new/thread-new.component';
import { PostComponent } from './post/post.component';
import { VoteHandleComponent } from './vote-handle/vote-handle.component';


@NgModule({
    declarations: [
        BoardComponent,
        ThreadDetailComponent,
        ThreadListComponent,
        ThreadNewComponent,
        PostComponent,
        VoteHandleComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        boardRouting
    ],
    providers: [
        BoardResolver,
        ThreadResolver,
        OPResolver
    ]
})
export class BoardModule {}
