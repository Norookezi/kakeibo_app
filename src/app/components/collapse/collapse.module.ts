import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse.component';
import { TitleDirective } from './directive/title.directive';
import { DetailsDirective } from './directive/details.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CollapseComponent,
    TitleDirective,
    DetailsDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [CollapseComponent]
})

export class CollapseModule { }
