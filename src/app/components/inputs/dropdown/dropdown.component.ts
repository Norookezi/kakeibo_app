import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input({}) list: {[key: string]: string} = {};
  @Output() onChange = new EventEmitter();

  change(value: Event) {
    delete this.list['default']
    const target = (value.target! as HTMLInputElement); 
    this.onChange.emit(target.value === "default"?'':target.value);
  };
}
