import { FormControl } from "@angular/forms";
import { AbstractControl, ValidationErrors } from "@angular/forms";

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
    type: "text"|"email"|"password";
    placeholder: string;
    value?: string
    validators: Array<(control: AbstractControl<any, any>) => ValidationErrors | null>;
}
