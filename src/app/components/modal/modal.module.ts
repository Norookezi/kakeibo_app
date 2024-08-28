import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@component/inputs/button/button.component';
import { ButtonModule } from '@component/inputs/button/button.module';
import { InputModule } from '@component/inputs/input/input.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, ButtonModule, InputModule
  ],
  exports: [ModalComponent]
})
export class ModalModule {}
