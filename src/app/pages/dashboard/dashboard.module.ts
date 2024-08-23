import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '@component/modal/modal.module';
import { DashboardPage } from './dashboard.page';



@NgModule({
  declarations: [ DashboardPage ],
  imports: [
    CommonModule, ModalModule
  ]
})
export class DashboardModule { }
