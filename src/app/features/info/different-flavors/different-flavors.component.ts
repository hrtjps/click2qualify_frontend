import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';


@Component({
  selector: 'smart-different-flavors',
  templateUrl: './different-flavors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DifferentFlavorsComponent implements OnInit {

  appName = APP_CONFIG.appName;

  constructor() { }

  ngOnInit() {
  }

}
