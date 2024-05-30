import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavBarComponent } from './appNavBar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppNavBarComponent],
  exports: [AppNavBarComponent]
})
export class AppNavBarModule { }
