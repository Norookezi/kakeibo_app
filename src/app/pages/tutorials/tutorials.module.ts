import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsPage } from './tutorials.page';
import { IonicModule } from '@ionic/angular';

import { ButtonModule } from "../../components/inputs/button/button.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from '@component/toast/toast.module';
import { InputModule } from '@component/inputs/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InputModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
],
  declarations: [TutorialsPage],
  schemas: [
  ]
})
export class TutorialsModule { }
