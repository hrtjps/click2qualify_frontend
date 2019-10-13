import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smart-collapse-page',
  templateUrl: './collapse-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapsePageComponent {

  accordionExample = 1;

}
