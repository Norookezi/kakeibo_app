import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsOpenService {
  private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();

  constructor() {}

  setIsOpen(isOpen: boolean) {
    this.isOpenSubject.next(isOpen);
  }
}
