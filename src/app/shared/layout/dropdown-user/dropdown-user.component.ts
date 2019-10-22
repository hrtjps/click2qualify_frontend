import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { USER_ROLE } from 'src/app/consts/consts';

@Component({
  selector: 'smart-dropdown-user',
  templateUrl: './dropdown-user.component.html',
})
export class DropdownUserComponent {
  currentUser: User;

  user = {
    app: 'Click2Qualify',
    name: 'Dr. Codex Lantern',
    email: 'drlantern@gotbootstrap.com',
    avatar: 'avatar-admin.png',
  };
  Roles = USER_ROLE;
  constructor(
    private authService: AuthService
  ) {
    this.currentUser = this.authService.currentUserValue;
  }

  logout() {
    this.authService.logout();
  }
}
