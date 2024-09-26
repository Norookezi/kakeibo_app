import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RouteHelper } from 'namedroutes';
import { FormHelper, Inputs } from 'FormHelper';
import { AuthService } from '@services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  activeForm: 'login' | 'register' = 'login';

  formLogin: Array<Inputs> = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      validators: [Validators.required],
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      validators: [Validators.required],
    },
  ];

  formRegister: Array<Inputs> = [
    {
      name: 'name',
      placeholder: 'Name',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'firstName',
      placeholder: 'First name',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'lastName',
      placeholder: 'Last name',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'email',
      placeholder: 'Email',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      validators: [Validators.required],
    },
    {
      name: 'confirmPassword',
      placeholder: 'Confirm password',
      type: 'password',
      validators: [Validators.required],
    },
  ];

  loginForm: FormGroup = new FormGroup(FormHelper.makeForm(this.formLogin));
  registerForm: FormGroup = new FormGroup(
    FormHelper.makeForm(this.formRegister)
  );

  setForm(activeForm: 'login' | 'register') {
    this.activeForm = activeForm;
  }

  checkMatch() {
    this.confirmPassword(
      this.registerForm.get('password')!.value,
      this.registerForm.get('confirmPassword')!.value
    );
  }
  constructor(private router: Router, private authService: AuthService) {
    const route = RouteHelper.getCurrentRoute(router) as 'register' | 'login';
    this.activeForm = route;
  }

  redirect(arg0: { name: string }) {
    RouteHelper.redirect(arg0, this.router);
  }

  confirmPassword(passwordValue: string, confirmPasswordValue: string) {
    if (passwordValue !== confirmPasswordValue) {
      this.registerForm.setErrors({
        confirmPassword: { value: 'Both passwords must match' },
      });
    }
  }

  onSubmit() {
    if (this.activeForm === 'login') {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful', response);
          // Rediriger ou effectuer d'autres actions
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    } else {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Registration successful', response);
          // Rediriger ou effectuer d'autres actions
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    }
  }

  ngOnInit() {}
}
