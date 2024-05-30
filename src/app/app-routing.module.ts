import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute } from 'src/namedroutes';
import { AppHomePage } from './pages/app/home/home.page';

export const routes: NamedRoute[] = [
  {
    name: 'homeApp',
    path: 'app/home/:page',
    component: AppHomePage,
  },
  {
    name: 'app',
    path: 'app',
    redirectTo: 'app/home/dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes as Routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
