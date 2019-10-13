import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { AuthLoginComponent } from './auth-login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthLoginRoutingModule
  ],
  declarations: [AuthLoginComponent]
})
export class AuthLoginModule { }
