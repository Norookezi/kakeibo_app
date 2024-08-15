import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamedRoute } from 'namedroutes';

import { AboutPage } from '@page/about/about.page';
import { BlogPage } from '@page/blog/blog.page';
import { CategoriesPage } from '@page/categories/categories.page';
import { ContactPage } from '@page/contact/contact.page';
import { DashboardPage } from '@page/dashboard/dashboard.page';
import { ExpensesPage } from '@page/expenses/expenses.page';
import { FaqPage } from '@page/faq/faq.page';
import { ForgotpasswordPage } from '@page/forgotpassword/forgotpassword.page';
import { ForumPage } from '@page/forum/forum.page';
import { GroupsPage } from '@page/groups/groups.page';
import { HomePage } from '@page/home/home.page';
import { IncomePage } from '@page/income/income.page';
import { PricingPage } from '@page/pricing/pricing.page';
import { PrivacyPage } from '@page/privacy/privacy.page';
import { ReportsPage } from '@page/reports/reports.page';
import { SettingsPage } from '@page/settings/settings.page';
import { SignupPage } from '@page/signup/signup.page';
import { TermsPage } from '@page/terms/terms.page';
import { TutorialsPage } from '@page/tutorials/tutorials.page';
import { LoginPage } from '@page/login/login.page';

export const routes: NamedRoute[] = [
  { path: '-', name: 'tuto', component: TutorialsPage },
  { path: 'login', name: 'login', component: LoginPage },
  { path: 'recovery', name: 'recovery', component: ForgotpasswordPage },
  { path: 'register', name: 'register', component: LoginPage },
  { path: '', name: 'home', component: HomePage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes as Routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
