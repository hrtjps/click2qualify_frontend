import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { NavigationItem, toggleNavSection } from 'src/app/store/navigation';

import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { Store } from '@ngrx/store';
import { makeSlideInOut } from '../../utils/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[smart-nav-item]',
  templateUrl: './nav-item.component.html',
  animations: [ makeSlideInOut()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {

  @Input() item: NavigationItem;
  @Input() minified: boolean;

  @HostBinding('class.active') get active() { return this.item.active; }
  @HostBinding('class.open') get open() { return this.item.open; }
  @HostBinding('class.js-filter-hide]') get hidden() { return this.item.matched !== null && !this.item.matched; }
  @HostBinding('class.js-filter-show]') get shown() { return this.item.matched !== null && this.item.matched; }
  @HostBinding('class.nav-title]') get navTitle() { return this.item.navTitle; }


  constructor(
    private store: Store<any>
  ) { }

  toggleSection($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(toggleNavSection({ item: this.item }));
  }

  trackByFn(idx: number, item: NavigationItem) {
    return item.title + '_' + idx;
  }

}
