import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Router } from '@angular/router';
import { NamedRoute } from 'namedroutes';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NavitemComponent),
      multi: true,
    },
  ],
})
export class NavitemComponent implements ControlValueAccessor{
  @Input() label!: string;
  @Input() value!: string;
  @Input() route!: NamedRoute;

  constructor(private router: Router) {
  }
  onChange: (value: string) => void = () => {
  };
  onTouched: () => void = () => {};

  get radio() { return this.value }

  set radio(radio) {
    this.onChange(radio)
    this.router.navigate([this.route.path])
    this.value = radio;
  }

  writeValue(obj: any): void { this.value = obj; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}
  onChangeText($event: Event) {}

}
