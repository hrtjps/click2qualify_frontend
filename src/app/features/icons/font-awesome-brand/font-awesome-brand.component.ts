import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-font-awesome-brand',
  templateUrl: './font-awesome-brand.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../../../scss/_webfonts/fontawesome-pro-master/scss/fa-brands.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FontAwesomeBrandComponent implements OnInit {

  prefix = 'fab';
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
