import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostControlsComponent } from './post-controls/post-controls.component';

import { VoteResultsComponent } from './vote-results/vote-results.component';


@NgModule({
    declarations: [
        BoardComponent,
        ThreadDetailComponent,
        ThreadListComponent,
        ThreadNewComponent,
        PostComponent,
        PostListComponent,
        PostCreateComponent,
        PostEditComponent,
        PostControlsComponent,
        VoteResultsComponent
    ],
    imports: [
        NgbModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        boardRouting
    ],
    providers: [
        BoardResolver,
        ThreadResolver,
        OPResolver
    ]
})
export class BoardModule {}
