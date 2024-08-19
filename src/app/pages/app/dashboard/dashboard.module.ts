import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppNavBarModule } from '@component/appNavBar/appNavBar.module';
import { AppHeaderModule } from '@component/appHeader/appHeader.module';
import { AppDashboardPage } from './dashboard.page';

@NgModule({
  declarations: [AppDashboardPage],
  imports: [
    CommonModule,
    IonicModule,
    AppNavBarModule,
    AppHeaderModule
  ],
  exports: [AppDashboardPage],
})

export class AppDashboardPageModule { }
