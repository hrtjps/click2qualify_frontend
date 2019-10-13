import { NgModule } from '@angular/core';
// import { NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

// import { SharedModule } from './../theme/shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthSignupComponent } from './auth-signup/auth-signup.component'
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { AuthResetComponent } from './auth-reset/auth-reset.component'
import { CookieModule } from 'ngx-cookie';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    AuthSignupComponent,
    AuthLoginComponent,
    AuthResetComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    // NgbTabsetModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
