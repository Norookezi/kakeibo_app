import { Injectable } from '@angular/core';
import { interval, map, Observable, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalClockService {
  now$: Observable<number>;
  constructor(){
    this.now$ = interval(1).pipe(
      startWith(null),
      map(() => new Date().valueOf())
    );
  }
}
