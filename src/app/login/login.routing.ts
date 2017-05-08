import { Routes, RouterModule } from '@angular/router';

import { IsLoggedOut } from '../core/auth/is-logged-out.guard';
import { IsLoggedIn } from '../core/auth/is-logged-in.guard';
import { IsInactive } from '../core/auth/is-inactive.guard';

import { LoginComponent } from './login.component';
import { FinalizeSocialComponent } from './finalize-social/finalize-social.component';

const LOGIN_ROUTES: Routes = [
    { path: '', component: LoginComponent, canActivate: [IsLoggedOut] },
    { path: 'finalize', component: FinalizeSocialComponent, canActivate: [IsLoggedIn, IsInactive] }
];

export const loginRouting = RouterModule.forChild(LOGIN_ROUTES);
