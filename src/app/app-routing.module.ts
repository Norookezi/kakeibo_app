import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute } from 'src/namedroutes';
import { AppDashboardPage } from '@page/app/dashboard/dashboard.page';
import { WebHomePage } from '@page/web/home/home.page';

export const routes: NamedRoute[] = [
  {
    name: 'dashboardApp',
    path: 'app/dashboard',
    component: AppDashboardPage,
  },
  {
    name: 'app',
    path: 'app',
    redirectTo: 'app/dashboard',
  },
  {
    name: 'home',
    path: '',
    component: WebHomePage,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes as Routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
