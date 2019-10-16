import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleFilter } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'smart-nav-info-card',
  templateUrl: './nav-info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavInfoCardComponent {

  user;
  avatar = APP_CONFIG.avatar;

  constructor(
    private store: Store<any>, 
    private authService: AuthService,
  ) {
    this.user = authService.currentUserValue;
    console.log(this.user);

  }

  toggleFilter($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(toggleFilter());

  }
}
