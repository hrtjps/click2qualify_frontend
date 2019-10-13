import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShortcutModalService } from '../shortcut-modal/shortcut-modal.service';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'smart-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  logo = APP_CONFIG.logo;
  appName = APP_CONFIG.appName;

  constructor(public shortcut: ShortcutModalService) { }

  openShortcut($event: MouseEvent) {
    $event.preventDefault();
    this.shortcut.openModal();

  }

}
