import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { BoardNotFoundComponent } from './board-not-found/board-not-found.component';
import { BoardResolve } from './board.resolve';

const BOARD_ROUTES: Routes = [
    { path: "", component: BoardComponent, resolve: {
        board: BoardResolve
    }},
    { path: "not-found", component: BoardNotFoundComponent }
];

export const boardRouting = RouterModule.forChild(BOARD_ROUTES);
