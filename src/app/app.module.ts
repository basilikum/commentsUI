import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

import { httpFactory } from "./http.factory";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsService } from './settings.service';

import { BoardService } from './board/board.service';

import { CoreModule }    from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routing } from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { HeaderLightComponent } from './header-light/header-light.component';


export class AuthConfig extends CustomConfig {
    defaultHeaders = {'Content-Type': 'application/json'};
    baseUrl = environment.apiBaseUrl;
    providers = {
        facebook: {clientId: '432035347139976'},
        google: {clientId: '65151455439-gie36be97nmf6iskmpu6b0frdo5ihb8b.apps.googleusercontent.com'}
    };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderLightComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2UiAuthModule.forRoot(AuthConfig),
    NgbModule.forRoot(),
    FileUploadModule,
    CoreModule,
    SharedModule,
    routing
  ],
  providers: [
    BoardService,
    {
      provide: LOCALE_ID,
      useValue: (navigator.language || navigator['browserLanguage'] || 'en').split('-')[0]
    },
    {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
