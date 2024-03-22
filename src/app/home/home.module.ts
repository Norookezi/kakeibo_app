import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HighlightComponent } from '../components/highlight/highlight.component';

import { Toggle_buttonComponent as Mobile_ToggleButtonComponent } from '../components/mobile_menu/toggle_button/toggle_button.component';
import { NavbarComponent as Mobile_NavbarComponent } from '../components/mobile_menu/navbar/navbar.component';
import { GetAppComponent } from '../components/get_app/get_app.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HighlightComponent,
    Mobile_ToggleButtonComponent,
    Mobile_NavbarComponent,
    GetAppComponent
  ]
})
export class HomePageModule {}
