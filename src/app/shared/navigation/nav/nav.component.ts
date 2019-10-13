import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { selectNavigationItems, NavigationItem } from 'src/app/store/navigation';
import { selectSettingsState } from 'src/app/store/settings';

@Component({
  selector: 'smart-nav',
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  vm$ = this.store.select(
    createSelector(
      selectNavigationItems,
      selectSettingsState,
      (items, settings) => ({ items, minified: settings.minifyNavigation })
    )
  );

  constructor(private store: Store<any>) { }

  trackByFn(idx: number, item: NavigationItem) {
    return item.title + '_' + idx;
  }
}
