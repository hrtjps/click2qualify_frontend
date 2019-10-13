import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as settings from 'src/app/store/settings';

@Component({
  selector: 'smart-nav-footer',
  templateUrl: './nav-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavFooterComponent {

  constructor(private store: Store<any>) {}

  toggleMinifyNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(settings.toggleMinifyNavigation());
  }
}
