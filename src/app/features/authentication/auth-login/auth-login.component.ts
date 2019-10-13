import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  isProfileFormSubmitted = false;
  isSecurityFormSubmitted = false;
  loginModel: any = new Object();
  constructor(private _cookieService: CookieService) { }


  ngOnInit() {
    var emailId = this._cookieService.get("emailId");
    if(emailId)
    {
      this.loginModel.Email = emailId;
    }
  }

  onProfileFormSubmit(form) {
    if (!form.valid) {
      this.isProfileFormSubmitted = true;
      return;
    }

    if (this.loginModel.IsRemember) {
      this._cookieService.put("emailId", this.loginModel.Email);
    }
  }
}
