import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WebHomePage } from './home.page';

import { AppHeaderModule } from '@component/appHeader/appHeader.module';
import { AppNavBarModule } from '@component/appNavBar/appNavBar.module';
import { BtnModule } from '@component/btn/btn.module';
import { CollapseModule } from '@component/collapse/collapse.module';
import { WebFooterModule } from '@component/webFooter/webFooter.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppNavBarModule,
    AppHeaderModule,
    BtnModule,
    CollapseModule,
    WebFooterModule
  ],
  declarations: [WebHomePage],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class WebHomePageModule { }
