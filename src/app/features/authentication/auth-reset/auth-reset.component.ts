import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-reset',
  templateUrl: './auth-reset.component.html',
  styleUrls: ['./auth-reset.component.scss']
})
export class AuthResetComponent implements OnInit {

  resetModel: any = new Object();
  isEmailFormSubmitted = false;
  isSecurityFormSubmitted = false;
  isConfirmPasswordFormSubmitted = false;
  constructor() { }

  ngOnInit() {
  }

  onEmailFormSubmitted(form)
  {
    if (!form.valid) {
      this.isEmailFormSubmitted = true;
      return;
    }
  }

}
