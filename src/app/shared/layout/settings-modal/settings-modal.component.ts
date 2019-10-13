import { Component, TemplateRef, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SubSink } from 'subsink';
import { SettingsModalService } from './settings-modal.service';

@Component({
  selector: 'smart-settings-modal',
  templateUrl: './settings-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsModalComponent implements OnDestroy {

  @ViewChild('template', {static: true}) template: any;

  modalRef: BsModalRef;

  private sub = new SubSink();

  constructor(private modalService: BsModalService, sms: SettingsModalService) {
    this.sub.sink = sms.openSettings$.subscribe(() => {
      this.showModal();
    });
  }

  openModal($event: MouseEvent) {
    $event.preventDefault();
    this.showModal();
  }

  private showModal() {
    this.modalRef = this.modalService.show(this.template, {
      class: 'modal-dialog-right modal-md'
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
