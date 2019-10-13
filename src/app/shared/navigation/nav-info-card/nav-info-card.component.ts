import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleFilter } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'smart-nav-info-card',
  templateUrl: './nav-info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavInfoCardComponent {

  user = APP_CONFIG.user;
  avatar = APP_CONFIG.avatar;

  constructor(private store: Store<any>) { }

  toggleFilter($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(toggleFilter());

  }
}
