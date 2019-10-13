import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { mobileNavigation } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'smart-page-header',
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {

  avatar = APP_CONFIG.avatar;
  email = APP_CONFIG.email;
  user = APP_CONFIG.user;

  constructor(private store: Store<any>) { }

  openMobileNav($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(mobileNavigation({open: true}));
  }

}
