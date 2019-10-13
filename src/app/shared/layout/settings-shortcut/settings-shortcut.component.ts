import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as settings from 'src/app/store/settings';

@Component({
  selector: 'smart-settings-shortcut',
  templateUrl: './settings-shortcut.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsShortcutComponent {

  constructor(private store: Store<any>) { }

  toggleHideNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(settings.toggleHideNavigation());
  }

  toggleMinifyNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(settings.toggleMinifyNavigation());
  }

  toggleFixedNavigation($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(settings.toggleFixedNavigation());
  }
}
