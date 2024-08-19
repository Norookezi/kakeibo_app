import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CollapseComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CollapseComponent]
})

export class CollapseModule { }
