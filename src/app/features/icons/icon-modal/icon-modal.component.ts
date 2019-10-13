import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { IconDef } from '../icon-list/icon-list.component';

@Component({
  selector: 'smart-icon-modal',
  templateUrl: './icon-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconModalComponent {

  @ViewChild('iconClassInput', { static: true }) iconClassInput: ElementRef;
  icon: IconDef;

  constructor(public bsModalRef: BsModalRef) { }

  closeModal() {
    this.bsModalRef.hide();
  }

  copyIconClass() {
    this.iconClassInput.nativeElement.value = `<i class="${this.icon.class}"></i>`;
    this.iconClassInput.nativeElement.select();
    document.execCommand('copy');
    this.bsModalRef.hide();
  }
}
