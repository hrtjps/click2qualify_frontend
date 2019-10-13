import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smart-button-group-page',
  templateUrl: './button-group-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGroupPageComponent {

  checkboxDemo = {
    check1: true,
    check2: false,
    check3: false
  };

  radioDemo = 'option1';

}
