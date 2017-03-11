import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from "./board.component";

const BOARD_ROUTES: Routes = [
    { path: "", component: BoardComponent }
];

export const boardRouting = RouterModule.forChild(BOARD_ROUTES);
