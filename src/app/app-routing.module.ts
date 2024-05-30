import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute } from 'src/namedroutes';
import { AppDashboardPage } from './pages/app/dashboard/dashboard.page';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes as Routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
