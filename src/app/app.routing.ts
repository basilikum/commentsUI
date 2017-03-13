import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { IsLoggedOut } from './core/auth/is-logged-out.guard';
import { HasValidUrlParam } from './core/has_valid_url_param.guard';

const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", loadChildren: "app/login/login.module#LoginModule", canActivate: [IsLoggedOut] },
    { path: "board", loadChildren: "app/board/board.module#BoardModule", canActivate: [HasValidUrlParam] },
    { path: "user", loadChildren: "app/user/user.module#UserModule" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
