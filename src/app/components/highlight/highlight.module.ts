import { NgModule } from '@angular/core';
import { HighlightComponent } from './highlight.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HighlightComponent],
  imports: [CommonModule, IonicModule],
  exports: [HighlightComponent],
})
export class HighlightModule {}
