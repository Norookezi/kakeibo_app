import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RedirectModule } from '../redirect/redirect.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RedirectModule,
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
