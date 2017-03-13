import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@angular/material';
import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BoardService } from './board/board.service';

import { CoreModule }    from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routing } from "./app.routing";

export class AuthConfig extends CustomConfig {
    defaultHeaders = {'Content-Type': 'application/json'};
    baseUrl = 'http://localhost:8000';
    providers = {
        facebook: {clientId: '432035347139976'},
        google: {clientId: '65151455439-gie36be97nmf6iskmpu6b0frdo5ihb8b.apps.googleusercontent.com'}
    };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2UiAuthModule.forRoot(AuthConfig),
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
    SharedModule,
    routing
  ],
  providers: [
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
