import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {HealthConditionsComponent} from "./health-conditions/health-conditions.component";
import {FamilarConditionsComponent} from "./familar-conditions/familar-conditions.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'health-conditions',
    children: [
      {
        path: '',
        component: HealthConditionsComponent,
      },
      {
        path: 'familiar',
        component: FamilarConditionsComponent
      },
      {
        path: 'user',
        component: FamilarConditionsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
