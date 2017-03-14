import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { BoardResolve } from './board.resolve';

const BOARD_ROUTES: Routes = [
    { path: "", component: BoardComponent, resolve: {
        board: BoardResolve
    }}
];

export const boardRouting = RouterModule.forChild(BOARD_ROUTES);
