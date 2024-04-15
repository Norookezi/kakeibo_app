import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MobileToggleButtonModule } from '../mobile_menu/mobileToggleButton/mobileToggleButton.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MobileToggleButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
