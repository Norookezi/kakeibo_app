import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './appHeader.component';
import { MenuButtonModule } from '@component/menuButton/menuButton.module';
import { BtnModule } from '@component/btn/btn.module';

@NgModule({
  imports: [
    CommonModule,
    MenuButtonModule,
    BtnModule
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent],
})
export class AppHeaderModule { }
