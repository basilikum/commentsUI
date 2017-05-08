import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./user.component";

import { UserResolver } from './user.resolver';

const USER_ROUTES: Routes = [
    { path: ":id", component: UserComponent, resolve: { user: UserResolver } }
];

export const userRouting = RouterModule.forChild(USER_ROUTES);
