import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLoginComponent} from './auth-login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLoginRoutingModule { }
