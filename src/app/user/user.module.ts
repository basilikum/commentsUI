import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { UserComponent } from './user.component';
import { userRouting } from './user.routing';
import { UserResolver } from './user.resolver';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        userRouting
    ],
    providers: [
        UserResolver
    ]
})
export class UserModule {}
