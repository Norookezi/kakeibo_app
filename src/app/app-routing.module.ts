import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute } from 'namedroutes';
import { WebHomePage } from '@page/web/home/home.page';
import { LoginComponent } from '@page/web/login/login.component';

export const routes: NamedRoute[] = [
  {
    name: 'home',
    path: '',
    component: WebHomePage,
  },
  {
    name: 'login',
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes as Routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
