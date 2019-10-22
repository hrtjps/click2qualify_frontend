import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleFilter } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
import { USER_ROLE } from 'src/app/consts/consts';

@Component({
  selector: 'smart-nav-info-card',
  templateUrl: './nav-info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavInfoCardComponent {

  user;
  avatar = APP_CONFIG.avatar;
  Roles = USER_ROLE;

  constructor(
    private store: Store<any>, 
    private authService: AuthService,
  ) {
    this.user = authService.currentUserValue;

  }

  toggleFilter($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(toggleFilter());

  }
}
