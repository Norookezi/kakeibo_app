import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menuButton.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MenuButtonComponent],
  exports: [MenuButtonComponent]
})
export class MenuButtonModule { }
