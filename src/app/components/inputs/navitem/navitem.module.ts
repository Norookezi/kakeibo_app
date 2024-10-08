import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavitemComponent } from './navitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [NavitemComponent],
  exports: [NavitemComponent]
})
export class NavitemModule { }
