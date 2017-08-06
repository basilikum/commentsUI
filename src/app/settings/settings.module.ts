import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { SettingsComponent } from './settings.component';
import { settingsRouting } from './settings.routing';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserChangeAuthComponent } from './user-change-auth/user-change-auth.component';


@NgModule({
    declarations: [
        SettingsComponent,
        PasswordResetComponent,
        UserEditComponent,
        UserChangeAuthComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        settingsRouting
    ],
    providers: [
    ]
})
export class SettingsModule {}
