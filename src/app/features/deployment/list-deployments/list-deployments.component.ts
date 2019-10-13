import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-list-deployments',
  templateUrl: './list-deployments.component.html',
  styleUrls: ['./list-deployments.component.scss']
})
export class ListDeploymentsComponent implements OnInit {
  filterString = '';
  deploymentsList: any[] = [
    {
      title: 'Deployment 1',
      body: 'deployment 1',
      icon: 'fa-code-merge',
    },
    {
      title: 'Deployment 2',
      body: 'deployment 2',
      icon: 'fa-code-merge',
    },
    {
      title: 'Deployment 3',
      body: 'deployment 3',
      icon: 'fa-code-merge',
    },
    {
      title: 'Deployment 4',
      body: 'deployment 4',
      icon: 'fa-code-merge',
    },
    {
      title: 'Deployment 5',
      body: 'deployment 5',
      icon: 'fa-code-merge',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
