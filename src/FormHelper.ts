import { FormControl } from "@angular/forms";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { DropdownEntry } from "@component/inputs/input/input.component";

export class FormHelper {
    static makeForm(form: Array<Inputs>) {
        const Form: {[key: string]: FormControl} = {};
        form.forEach((value)=> {
          Form[value.name] = new FormControl(value.value??'', {
            validators: value.validators
          })
        });
        return Form
      }
}


export interface Inputs {
    name: string;
    type: "text"|"email"|"password"|"number"|"dropdown";
    placeholder: string;
    value?: string | {[key: string]: DropdownEntry}
    validators: Array<(control: AbstractControl<any, any>) => ValidationErrors | null>;
}
