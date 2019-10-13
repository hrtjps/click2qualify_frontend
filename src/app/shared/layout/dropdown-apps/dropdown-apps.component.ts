import { Component, OnInit } from '@angular/core';
import { NavigationItems } from '../../../app.navigation';

@Component({
  selector: 'smart-dropdown-apps',
  templateUrl: './dropdown-apps.component.html',
  styleUrls: ['./dropdown-apps.component.scss']
})
export class DropdownAppsComponent implements OnInit {

  apps = [];

  constructor() {
  }

  ngOnInit() {
    this.apps = NavigationItems.filter(item => {
      return Object.keys(item).indexOf('showInApps') > -1;
    });
  }

}
