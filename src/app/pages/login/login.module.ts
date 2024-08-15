import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@component/inputs/button/button.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { LinkModule } from '@component/link/link.module';
import { InputModule } from '@component/inputs/input/input.module';



@NgModule({
  declarations: [LoginPage],
  imports: [
    InputModule,
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    LinkModule
  ]
})
export class LoginModule { }
