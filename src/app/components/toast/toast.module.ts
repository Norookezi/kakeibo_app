import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ToastComponent]
})

export class ToastModule { }
