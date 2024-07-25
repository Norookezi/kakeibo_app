  import { Page, OnInit } from '@angular/core';
  import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
  import { request } from 'requests';


  @Page({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginPage implements OnInit {
    testURL:string = "https://kakeibo.free.beeceptor.com";
    formType: 'login' | 'register' = 'login';
    onSubmit(event: FormGroup<any>) {
      if (event.invalid) {
        console.log("Invalid form")
        return;
      } else {
        const response = request.POST.setField(event.getRawValue()).url(this.testURL + "/test").submit();

        console.log(response);
      }

    }
    constructor(private fb: FormBuilder) { }

    public loginForm!: FormGroup;
    public registerForm!: FormGroup;

    get password() {
      return this.loginForm!.get('password');
    }

    get email() {
      return this.loginForm!.get('email');
    }

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl<string>(''),
        password: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(4)]))
      });

      this.registerForm = new FormGroup({
        email: new FormControl<string>(''),
        password: new FormControl('', Validators.compose([ Validators.required, Validators.minLength(4)])),
        confirmpassword: new FormControl('', this.passwordMatchValidator)
      });
    }


    passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
      const form = control.parent
      const password = form?.get('password');
      const confirmpassword = form?.get('confirmpassword');

      if (!password || !confirmpassword) {
        return null;
      }

      return password.value === confirmpassword.value ? null : { 'passwordMismatch': true };
    };
  }
