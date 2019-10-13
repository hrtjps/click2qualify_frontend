import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'smart-page-footer',
  templateUrl: './page-footer.component.html',
  styles: []
})
export class PageFooterComponent implements OnInit {

  copyright = APP_CONFIG.copyright;
  constructor() { }

  ngOnInit() {
  }

}
