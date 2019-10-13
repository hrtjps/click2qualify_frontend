import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-font-awesome-regular',
  templateUrl: './font-awesome-regular.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../../../scss/_webfonts/fontawesome-pro-master/scss/fa-regular.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FontAwesomeRegularComponent implements OnInit {

  prefix = 'far';
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
