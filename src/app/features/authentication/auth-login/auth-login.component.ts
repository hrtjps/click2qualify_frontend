import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  isSubmitted = false;
  loading = false;
  returnUrl: string;

  loginModel: any = new Object();
  constructor(
    private _cookieService: CookieService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private commonService: CommonService,
    private router: Router
  ) { }


  ngOnInit() {
    var emailId = this._cookieService.get("emailId");
    if(emailId)
    {
      this.loginModel.Email = emailId;
    }
  }

  onProfileFormSubmit(form) {
    if (!form.valid) {
      this.isSubmitted = true;
      return;
    }

    if (this.loginModel.IsRemember) {
      this._cookieService.put("emailId", this.loginModel.Email);
    }

    this.loading = true;

    this.authService.login(form.value.email, form.value.password)
      .subscribe(user => {
        console.log(user);
        this.toastr.success("Successfully logged in!", 'Congratulation!');
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.toastr.error(this.commonService.convertReqErr2String(error.error), 'Error');
        this.loading = false;
      })
  }
}
