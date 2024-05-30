import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppNavBarModule } from 'src/app/components/appNavBar/appNavBar.module';
import { AppHeaderModule } from 'src/app/components/appHeader/appHeader.module';
import { AppHomePage } from './home.page';

@NgModule({
  declarations: [AppHomePage],
  imports: [
    CommonModule,
    IonicModule,
    AppNavBarModule,
    AppHeaderModule
  ],
  exports: [AppHomePage],
})

export class AppHomePageModule {}
