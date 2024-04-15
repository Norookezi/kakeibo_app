import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GetAppComponent } from './get_app.component';

@NgModule({
  declarations: [GetAppComponent],
  imports: [CommonModule, IonicModule],
  exports: [GetAppComponent],
})
export class GetAppModule {}