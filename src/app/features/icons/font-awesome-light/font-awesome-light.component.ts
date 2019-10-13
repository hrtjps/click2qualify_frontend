import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-font-awesome-light',
  templateUrl: './font-awesome-light.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FontAwesomeLightComponent implements OnInit {

  prefix = 'fal';
  family = 'fa';
  fontAwesomeIconList: string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fontAwesomeIconList = this.route.snapshot.data.icons.fontAwesomeIconList
      .map((icon: string) => ({
        class: `${this.prefix} ${this.family}${icon}`,
        title: icon.substring(1)
      }));

  }
}
