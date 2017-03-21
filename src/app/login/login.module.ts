import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { loginRouting } from "./login.routing";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        loginRouting
    ],
})
export class LoginModule {}
