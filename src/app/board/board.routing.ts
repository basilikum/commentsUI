import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board.component';
import { BoardResolve } from './board.resolve';

const BOARD_ROUTES: Routes = [
    { path: ":id", component: BoardComponent, resolve: {
      contact: BoardResolve
    }}
];

export const boardRouting = RouterModule.forChild(BOARD_ROUTES);
