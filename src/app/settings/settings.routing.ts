import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

import { MeResolver } from '../shared/me.resolver';


const SETTINGS_ROUTES: Routes = [
    { path: '', component: SettingsComponent, resolve: { me: MeResolver } }
];

export const settingsRouting = RouterModule.forChild(SETTINGS_ROUTES);
