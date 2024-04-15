import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RedirectComponent } from './redirect.component';

@NgModule({
  declarations: [RedirectComponent],
  imports: [CommonModule, IonicModule],
  exports: [RedirectComponent],
})
export class RedirectModule {}
