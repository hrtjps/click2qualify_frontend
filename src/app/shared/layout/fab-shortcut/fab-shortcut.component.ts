import { Component} from '@angular/core';
import { scrollToTop, toggleFullscreen } from '../../utils/utils.functions';
import { Store } from '@ngrx/store';
import { Go } from 'src/app/store/router';

@Component({
  selector: 'smart-fab-shortcut',
  templateUrl: './fab-shortcut.component.html'
})
export class FabShortcutComponent {

  constructor(private store: Store<any>) { }


  scrollTop($event: MouseEvent) {
    $event.preventDefault();
    scrollToTop(150);

  }
  logout($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(new Go({path: ['/logout']}));

  }
  fullScreen($event: MouseEvent) {
    $event.preventDefault();
    toggleFullscreen();

  }
  printPage($event: MouseEvent) {
    $event.preventDefault();
    window.print();

  }

}
