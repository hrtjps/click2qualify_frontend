import { Component, ChangeDetectionStrategy } from '@angular/core';
import { selectFilter } from 'src/app/store/navigation';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smart-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  vm$ = this.store.select(selectFilter);

  constructor(private store: Store<any>) { }

}
