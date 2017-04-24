import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { LoginComponent } from './login.component';
import { loginRouting } from "./login.routing";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        RecaptchaModule,
        SharedModule,
        ReactiveFormsModule,
        loginRouting
    ],
})
export class LoginModule {}
