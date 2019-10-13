import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'smart-shortcut-modal',
  templateUrl: './shortcut-modal.component.html',
})
export class ShortcutModalComponent {

  constructor(public bsModalRef: BsModalRef) { }

  closeShortcut($event: MouseEvent) {
    this.bsModalRef.hide();
  }

}
