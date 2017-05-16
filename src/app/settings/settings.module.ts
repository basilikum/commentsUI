import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { SettingsComponent } from './settings.component';
import { settingsRouting } from './settings.routing';


@NgModule({
    declarations: [
        SettingsComponent
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
