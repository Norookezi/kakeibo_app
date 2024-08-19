import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent  implements ControlValueAccessor {
  @Input({}) placeholder!: string;
  @Input({}) value: boolean = false;

  get input() { return this.value }

  set input(value: boolean) {
    this.onChange(value)
    this.value = value;
  }

  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(obj: any): void { this.input = obj; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}
  onChangeText($event: Event) {}

}
