import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule { }
