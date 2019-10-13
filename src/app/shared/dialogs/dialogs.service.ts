import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs';

@Injectable()
export class DialogsService {
  bsModalRef: BsModalRef;
  renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    private modalService: BsModalService) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public confirm(initialState: DialogOptions) {
    this.playSound('messagebox');
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent,
      {
        initialState,
        backdrop: 'static',
        keyboard: false,
        class: 'modal-dialog-centered'
      });
    this.renderer.addClass(document.querySelector('.modal'), 'modal-alert');
    return this.bsModalRef.content.onClose as Observable<boolean>;
  }

  public playSound(sound: string, path = 'assets/media/sound') {
    const audioElement = document.createElement('audio');
    if (navigator.userAgent.match('Firefox/')) {
      audioElement.setAttribute('src', path + '/' + sound + '.ogg');
    } else {
      audioElement.setAttribute('src', path + '/' + sound + '.mp3');
    }

    audioElement.addEventListener('load', () => {
      audioElement.play();
    }, true);
    audioElement.pause();
    audioElement.play();
  }

}

export interface DialogOptions {
  title: string;
  message: string;
  buttons: DialogButtons;
}
export interface DialogButton {
  label: string;
  className: string;
}
export interface DialogButtons {
  confirm?: DialogButton;
  cancel?: DialogButton;
}
