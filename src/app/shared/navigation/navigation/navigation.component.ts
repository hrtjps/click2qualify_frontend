import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSettingsState } from 'src/app/store/settings';

@Component({
  selector: 'smart-navigation',
  template: `
    <!-- BEGIN PRIMARY NAVIGATION -->
	  <nav *ngIf="vm$ | async as vm" id="js-primary-nav" class="primary-nav" [class.h-100]="vm.fixedNavigation" role="navigation">
      <smart-nav-filter></smart-nav-filter>
      <smart-nav-info-card></smart-nav-info-card>
      <smart-nav></smart-nav>
      <smart-nav-filter-msg></smart-nav-filter-msg>
    </nav>
    <!-- END PRIMARY NAVIGATION -->
    <smart-nav-footer></smart-nav-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  vm$ = this.store.select(selectSettingsState);

  constructor(private store: Store<any>) { }
}
