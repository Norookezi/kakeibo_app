import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@component/toast/toast.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.page.html',
  styleUrls: ['./tutorials.page.scss'],
})
export class TutorialsPage  implements OnInit {
summonToast() {
  this.toast.add()
}

  public login2Disabled: boolean = false;
  public formTest!: FormGroup;

  
  constructor(private fb: FormBuilder, private toast: ToastService) { }
  
  ngOnInit() {
    this.formTest = new FormGroup({
      checkbox: new FormControl(''),
      login: new FormControl('', Validators.required),
      password: new FormControl('', { validators:[Validators.minLength(5), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!?_\-]).+$/)]}),
      login2: new FormControl('', { validators: [Validators.minLength(10)]}),
    })
  }

  formatCode(value: string): string {
    if (value.match(/^\d{4}$/) || value.match(/^\d{3}\-\d{4}$/)) {
      return value.substring(0, value.length - 1) +  "-" + value.substring(value.length - 1)
    }
    return value
  }

  enableLast(event: Event){
    const isChecked = (event.target! as HTMLInputElement).checked
    this.login2Disabled = isChecked    
  }
}
