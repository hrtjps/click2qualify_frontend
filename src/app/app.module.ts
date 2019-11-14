import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { CommonService } from './services/common.service';
import { QuestionsService } from './services/questions.service';
import { FormsService } from './services/forms.service';
import { NgxStripeModule } from 'ngx-stripe';
import { FormValidationService } from './services/form-validation.service';
import { DownloadService } from './services/download.service';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ToastrModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_O7Tryd3wgXkkjA9Jg4u32au5007bOkieTw')
  ],
  providers: [
    QuestionsService,
    UserService,
    AuthService,
    FormsService,
    CommonService,
    FormValidationService,
    DownloadService,
    ChatService,


    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
