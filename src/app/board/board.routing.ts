import { Routes, RouterModule } from '@angular/router';

import { HasValidUrlParam } from '../core/has_valid_url_param.guard';
import { IsLoggedIn } from '../core/auth/is-logged-in.guard';

import { BoardComponent } from './board.component';
import { BoardResolver } from './board.resolver';
import { ThreadResolver } from './thread.resolver';
import { OPResolver } from './op.resolver';
import { ThreadNewComponent } from './thread-new/thread-new.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';


const BOARD_ROUTES: Routes = [
    { path: "", component: BoardComponent, canActivate: [HasValidUrlParam], resolve: { board: BoardResolver }, runGuardsAndResolvers: 'paramsOrQueryParamsChange', children: [
        { path: "", component: ThreadListComponent },
        { path: "new", component: ThreadNewComponent, canActivate: [IsLoggedIn] },
        { path: ":id", component: ThreadDetailComponent, resolve: { thread: ThreadResolver, post: OPResolver } }
    ]},

];

export const boardRouting = RouterModule.forChild(BOARD_ROUTES);
