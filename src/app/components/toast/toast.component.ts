import { Component } from '@angular/core';
import { ToastService } from './toast.service';
import { InternalClockService } from 'internalClock.service';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent {
  constructor(private toastService: ToastService, public clockService: InternalClockService){}

  toastList = this.toastService.toastList;
}