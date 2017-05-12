import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { UserComponent } from './user.component';
import { userRouting } from './user.routing';
import { UserResolver } from './user.resolver';
import { UserPostListComponent } from './user-post-list/user-post-list.component';
import { UserPostComponent } from './user-post/user-post.component';

@NgModule({
    declarations: [
        UserComponent,
        UserPostListComponent,
        UserPostComponent
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
