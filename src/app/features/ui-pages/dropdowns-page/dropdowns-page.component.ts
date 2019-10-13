import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smart-dropdowns-page',
  templateUrl: './dropdowns-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownsPageComponent {

  user = {
    name: 'Dr. Codex Lantern',
    email: 'drlantern@gotbootstrap.com',
    avatar: 'avatar-admin.png',
  };
}
