import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from '@component/inputs/input/input.module';
import { ButtonModule } from '@component/inputs/button/button.module';
import { IonicModule } from '@ionic/angular';
import { LinkModule } from '@component/link/link.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordPage } from './forgotpassword.page';



@NgModule({
  declarations: [
    ForgotpasswordPage
  ],
  imports: [
    InputModule,
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    LinkModule
  ]
})
export class ForgotpasswordModule { }
