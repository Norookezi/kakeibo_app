import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteHelper } from 'namedroutes';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  activeForm: 'login'|'register' = 'login'

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    }),
  });
  registerForm: FormGroup = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required]
    }),
  });

  setForm(activeForm: 'login'|'register') {
    this.activeForm = activeForm
  }

  checkMatch() {
    this.confirmPassword(this.registerForm.get('password')!.value, this.registerForm.get('confirmPassword')!.value);
  }
  constructor(private router: Router) {
    const route = RouteHelper.getCurrentRoute(router) as 'register'|'login';
    this.activeForm = route;
  }

  redirect(arg0: { name: string }) {
    RouteHelper.redirect(arg0, this.router);
  }

  confirmPassword(passwordValue: string, confirmPasswordValue: string) {
    if (passwordValue !== confirmPasswordValue) {
      this.registerForm.setErrors({ confirmPassword: { value: "Both passwords must match"}})
    }
  }

  ngOnInit() {}
}
