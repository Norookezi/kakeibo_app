import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '@component/modal/modal.module';
import { DashboardPage } from './dashboard.page';
import { BtnModule } from '@component/-btn/btn.module';
import { PopupModule } from '@component/popup/popup.module';

@NgModule({
  declarations: [DashboardPage],
  imports: [CommonModule, ModalModule, BtnModule, PopupModule],
})
export class DashboardModule {}
