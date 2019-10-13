import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smart-navbars-page',
  templateUrl: './navbars-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarsPageComponent {
  user = {
    app: 'SmartAdmin',
    name: 'Dr. Codex Lantern',
    email: 'drlantern@gotbootstrap.com',
    avatar: 'avatar-admin.png',
  };
}
