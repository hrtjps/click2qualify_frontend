import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'smart-product-licensing',
  templateUrl: './product-licensing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductLicensingComponent implements OnInit {

  app = APP_CONFIG.app;
  appName = APP_CONFIG.appName;

  constructor() { }

  ngOnInit() {
  }

}
