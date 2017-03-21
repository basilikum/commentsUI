import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { userRouting } from "./user.routing";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        userRouting
    ],
})
export class UserModule {}
