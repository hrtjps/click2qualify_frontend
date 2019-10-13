import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'smart-nextgen-general',
  templateUrl: './nextgen-general.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextgenGeneralComponent implements OnInit {

  prefix = 'ni';
  family = 'ni';
  nextGenIconList: string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nextGenIconList = this.route.snapshot.data.icons.nextGenIconList
      .map((icon: string) => ({
        class: `${this.prefix} ${this.family}${icon}`,
        title: icon.substring(1)
      }));

  }

}
