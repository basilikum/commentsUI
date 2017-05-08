import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { loginRouting } from "./login.routing";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessModalComponent } from './register/register-success-modal/register-success-modal.component';
import { FinalizeSocialComponent } from './finalize-social/finalize-social.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        RegisterSuccessModalComponent,
        FinalizeSocialComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        loginRouting
    ],
    entryComponents: [
        RegisterSuccessModalComponent
    ]
})
export class LoginModule {}
