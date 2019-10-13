import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthResetRoutingModule } from './auth-reset-routing.module';
import { AuthResetComponent } from './auth-reset.component';

@NgModule({
  imports: [
    CommonModule,
    AuthResetRoutingModule
  ],
  declarations: [AuthResetComponent]
})
export class AuthResetModule { }
