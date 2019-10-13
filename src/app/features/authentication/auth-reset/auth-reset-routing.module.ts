import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthResetComponent} from './auth-reset.component';

const routes: Routes = [
  {
    path: '',
    component: AuthResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthResetRoutingModule { }
