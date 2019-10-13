import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';

@Component({
  selector: 'smart-introduction',
  templateUrl: './introduction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionComponent implements OnInit {

  app = APP_CONFIG.app;

  constructor() { }

  ngOnInit() {
  }

}
