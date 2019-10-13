import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthResetComponent } from './auth-reset/auth-reset.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: AuthSignupComponent,
      },  
      {
        path: 'login',
        component: AuthLoginComponent,
      }, 
      {
        path: 'reset-password',
        component: AuthResetComponent,
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
