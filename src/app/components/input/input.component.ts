import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input({}) name!: string;
  @Input({}) id!: string;
  @Input({}) type!: "text" | "password" | "email";
  @Input({}) value: string = ""
  @Input({}) validity: "valid" | "invalid" | "neutre" = 'neutre';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  public activeType: null|"text" = null;
  public isPasswordShown: boolean = false;
  public isActive: boolean = false;

  get text() { return this.value }

  set text(text) {
    this.onChange(text)
    this.value = text;
    this.isActive = (this.value.length > 0);
  }

  passwordVisibilityChanged() {
    this.isPasswordShown = !this.isPasswordShown;
    this.activeType = this.isPasswordShown ? 'text' : null;
  }

  constructor() { }

  writeValue(obj: any): void { this.text = obj; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}
  onChangeText($event: Event) {}
}
