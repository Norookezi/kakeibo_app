import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonComponent),
      multi: true
    }
  ]
})
export class ButtonComponent implements ControlValueAccessor {

  @Input({}) placeholder!: string;
  @Input({}) type: "button" | "submit" = "button";
  @Input({}) disabled: boolean = false;
  @Input({}) clickAction: Function = () => { console.info('Unbind button'); }

  @Output() content: EventEmitter<string | number | boolean> = new EventEmitter();

  constructor() { }
  onChange: (value: string | number | boolean) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  onChangeText($event: Event) { }


}
