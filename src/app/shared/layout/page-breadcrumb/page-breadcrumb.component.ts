import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRouterState } from 'src/app/store/router';

@Component({
  selector: 'smart-page-breadcrumb',
  templateUrl: './page-breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageBreadcrumbComponent {

  date = Date.now();

  vm$ = this.store.select(getRouterState);

  constructor(private store: Store<any>) { }
}
