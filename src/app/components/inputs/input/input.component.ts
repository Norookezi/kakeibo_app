import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input({}) placeholder?: string;
  @Input({}) name! : string;
  @Input({}) disabled: boolean = false;
  @Input({}) type!: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
  @Input({}) errors?: ValidationErrors | null = undefined;
  @Input({}) value: string | number = "";
  @Input({}) cast: Function = (value: string): string => { return value; };
  @Input({}) required: boolean = false;
  
  public passwordVisibility: boolean = false;
  public id: string = Math.random().toString(36).substring(2, 5);

  get elementType(): string { return this.passwordVisibility ? 'text' : this.type; }

  togglePassword() {
    this.passwordVisibility = !this.passwordVisibility;
  }

  constructor() { }

  get input() { return this.value }

  set input(text) {
    text = this.cast(text);
    this.onChange(text)
    this.value = text;
  }

  onChange: (value: string | number) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(obj: any): void { this.input = obj; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}
  onChangeText($event: Event) {}
}
