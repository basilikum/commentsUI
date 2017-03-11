import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { loginRouting } from "./login.routing";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        loginRouting
    ],
})
export class LoginModule {}
