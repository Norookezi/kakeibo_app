import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DropdownComponent} from '../inputs/dropdown/dropdown.component';
import { FormHelper, Inputs } from 'FormHelper';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  
  formModal: Array<Inputs> = [
  {name: "value", placeholder: "Value", type:"number", validators: [Validators.required]},
  {name: "title", placeholder: "Title", type:"text", validators: [Validators.required]},
  {name: "description", placeholder: "Description", type:"text", validators: [Validators.maxLength(500)]},
  {name: "frequency", placeholder: "Frequency", type:"number", validators: []}
 ]

 modalForm: FormGroup = new FormGroup(FormHelper.makeForm(this.formModal));
}
