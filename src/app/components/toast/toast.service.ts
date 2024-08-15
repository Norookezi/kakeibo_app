import { Injectable } from '@angular/core';
import { Toast } from './Toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public toastList: { [key: string]: Toast } = {};

  constructor() { }

  public add() {
    const toastObject: Toast = new Toast(this).info.setTitle('Toast Works').bake();
    this.toastList[toastObject.id] = toastObject;
  }
}

export interface ToastInterface {
  id: string;
  title: string;
  type: "warning" | "success" | "info" | "error"
  kill: boolean;
  createdAt: number;
  expiresAt: number;
  duration: number;
}