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
console($event: Event) {
console.log(($event.target as HTMLInputElement).value)
}
typeof(arg0: string|number|{ [key: string]: DropdownEntry; }) {return typeof arg0;}
  @Input({}) placeholder?: string;
  @Input({}) name! : string;
  @Input({}) disabled: boolean = false;
  @Input({}) type!: "button" | "checkbox" | "textentry" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" | "dropdown"
  @Input({}) errors?: ValidationErrors | null = undefined;
  @Input({}) value: string | number | {[key: string]: DropdownEntry} = "";
  @Input({}) cast: Function = (value: string): string => { return value; };
  @Input({}) required: boolean = false;
  
  private _passwordVisibility: boolean = false;
  dropdownValue(value: string | number | {[key: string]: DropdownEntry}): Array<any> {
    if (typeof value !=='object' ) return []
    return Object.entries(value)
  }
  public id: string = Math.random().toString(36).substring(2, 5);

  set passwordVisibility($event: boolean) {
    this._passwordVisibility = $event
  }


  get elementType(): string { return this._passwordVisibility ? 'text' : this.type; }

  constructor() { }

  get input() { return this.value }

  set input(text) {
    text = this.cast(text);
    this.onChange(text as string);
    if (typeof this.value == 'string') this.value = text;
  }

  onChange: (value: string | number) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(obj: any): void { this.input = obj; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}
  onChangeText($event: Event) {}
}

export interface DropdownEntry {
  value: string;
  disabled?: boolean;
  selected?: boolean;
}