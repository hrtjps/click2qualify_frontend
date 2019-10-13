import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-font-awesome-solid',
  templateUrl: './font-awesome-solid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../../../scss/_webfonts/fontawesome-pro-master/scss/fa-solid.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FontAwesomeSolidComponent implements OnInit {

  prefix = 'fas';
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
