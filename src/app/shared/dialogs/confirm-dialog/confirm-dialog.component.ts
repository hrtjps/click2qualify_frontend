import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { DialogButtons } from '../dialogs.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'smart-confirm-dialog',
  template: `
    <div class="modal-header">
      <div class="modal-title" [innerHTML]="title">
      </div>
    </div>
    <div class="modal-body" [innerHTML]="message"></div>
    <div class="modal-footer" *ngIf="buttons">
      <button (click)="confirm($event)" type="button" class="btn bootbox-accept {{buttons.confirm.className}}">
      {{buttons.confirm.label}}</button>
      <button (click)="cancel($event)" type="button" class="btn bootbox-cancel {{buttons.cancel.className}}">
      {{buttons.cancel.label}}</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  title: string;
  message: string;
  buttons: DialogButtons;
  onClose = new Subject();

  constructor(public bsModalRef: BsModalRef) { }

  confirm($event: MouseEvent) {
    this.onClose.next(true);
    this.onClose.complete();
    this.bsModalRef.hide();
  }
  cancel($event: MouseEvent) {
    this.onClose.next(false);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

}
