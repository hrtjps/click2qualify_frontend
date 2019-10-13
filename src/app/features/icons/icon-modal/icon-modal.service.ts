import { Injectable } from '@angular/core';
import { IconModalComponent } from './icon-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { IconDef } from '../icon-list/icon-list.component';

@Injectable({
  providedIn: 'root'
})
export class IconModalService {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  public openModal(icon: IconDef) {
    this.bsModalRef = this.modalService.show(IconModalComponent,
      {
        class: 'modal-dialog modal-lg',
        initialState: {
          icon
        }
      });
  }
}
