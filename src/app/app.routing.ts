import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { IsLoggedOut } from './core/auth/is-logged-out.guard';

const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", loadChildren: "app/login/login.module#LoginModule", canActivate: [IsLoggedOut] },
    { path: "board", loadChildren: "app/board/board.module#BoardModule" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
