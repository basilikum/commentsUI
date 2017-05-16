import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", loadChildren: "app/login/login.module#LoginModule" },
    { path: "board", loadChildren: "app/board/board.module#BoardModule" },
    { path: "user", loadChildren: "app/user/user.module#UserModule" },
    { path: "settings", loadChildren: "app/settings/settings.module#SettingsModule" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
