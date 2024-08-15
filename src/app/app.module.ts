import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TutorialsModule } from '@page/tutorials/tutorials.module';
import { LoginModule } from '@page/login/login.module';
import { HeaderModule } from "./components/header/header.module";
import { HomeModule } from '@page/home/home.module';
import { ForgotpasswordModule } from '@page/forgotpassword/forgotpassword.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    TutorialsModule,
    LoginModule,
    HeaderModule,
    ForgotpasswordModule
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
