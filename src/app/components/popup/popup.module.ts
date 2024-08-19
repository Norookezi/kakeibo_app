import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PopupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [PopupComponent]
})

export class PopupModule { }
