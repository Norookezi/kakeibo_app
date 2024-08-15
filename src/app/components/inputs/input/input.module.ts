import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [InputComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class InputModule { }
