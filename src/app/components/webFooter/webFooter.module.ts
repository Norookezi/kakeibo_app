/* WebFooter.module.ts */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WebFooterComponent } from './webFooter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    WebFooterComponent,
  ],
  exports: [WebFooterComponent]
})
export class WebFooterModule {}
