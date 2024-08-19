import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavitemModule } from '@component/inputs/navitem/navitem.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [ CommonModule, NavitemModule, ReactiveFormsModule ],
  exports: [HeaderComponent]
})
export class HeaderModule { }