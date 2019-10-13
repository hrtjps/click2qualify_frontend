import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'smart-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {
  @ViewChild('template', {static: true}) template: any;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  public showModal() {
    this.modalRef = this.modalService.show(this.template, {
      class: 'modal-dialog-right chat-modal'
    });
  }

  public hideModal() {
    if (this.modalRef) {
      this.modalRef.hide();
      this.modalRef = null;
    }
  }

  ngOnInit() {

  }

}

