import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ShortcutModalComponent } from './shortcut-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ShortcutModalService {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openModal() {
    this.bsModalRef = this.modalService.show(ShortcutModalComponent,
      {
        class: 'modal-dialog-top modal-transparent'
      });
  }
}
