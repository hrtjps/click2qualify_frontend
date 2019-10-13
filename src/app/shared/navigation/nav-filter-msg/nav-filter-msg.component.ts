import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectResult } from 'src/app/store/navigation';

@Component({
  selector: 'smart-nav-filter-msg',
  templateUrl: './nav-filter-msg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavFilterMsgComponent {
  vm$ = this.store.select(selectResult);
  constructor(private store: Store<any>) { }
}
