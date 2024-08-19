import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { ButtonModule } from '@component/inputs/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule
  ],
  declarations: [HomePage],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
