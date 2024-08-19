import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements ControlValueAccessor {
  @Input() value!: string;
  
  constructor() { }

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  get radio() { return this.value }

  set radio(radio) {
    this.onChange(radio)
    console.log(radio);
    this.value = radio;
  }

  writeValue(obj: any): void { this.value = obj; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}
  onChangeText($event: Event) {}

}
