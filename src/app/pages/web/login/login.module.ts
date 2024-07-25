import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.component';
import { InputModule } from '@component/input/input.module';
import { AppHeaderModule } from "../../../components/appHeader/appHeader.module";
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BtnModule } from "../../../components/btn/btn.module";
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InputModule,
    AppHeaderModule,
    AppHeaderModule,
    ReactiveFormsModule,
    BtnModule
],
  declarations: [LoginPage]
})
export class LoginModule { }
