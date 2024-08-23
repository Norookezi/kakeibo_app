import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { DropdownModule } from '@component/inputs/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@component/inputs/button/button.component';
import { ButtonModule } from '@component/inputs/button/button.module';
import { InputModule } from '@component/inputs/input/input.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule, DropdownModule, ReactiveFormsModule, FormsModule, ButtonModule, InputModule
  ],
  exports: [ModalComponent]
})
export class ModalModule {}
