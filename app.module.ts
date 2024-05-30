import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';
import { AuthButtonComponent } from './components/app-auth-button/app-auth-button.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreciosComponent,
    ProtegidaComponent,
    HomeComponent,
    AuthButtonComponent
  ],

  imports: [
    AuthModule.forRoot({
      domain: 'dev-vgnhn0qw3xj3wx2g.us.auth0.com',
      clientId: 'Cqre1UtCykeRVG5LIgwUMjipDAZukBX3',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
