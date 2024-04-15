import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MobileToggleButtonComponent } from './mobileToggleButton.component';

@NgModule({
  declarations: [MobileToggleButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [MobileToggleButtonComponent],
})
export class MobileToggleButtonModule {}
