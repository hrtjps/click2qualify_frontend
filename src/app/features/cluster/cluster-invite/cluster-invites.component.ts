import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'smart-cluster-invites',
  templateUrl: './cluster-invites.component.html',
  styleUrls: ['./cluster-invites.component.scss']
})
export class ClusterInvitesComponent implements OnInit {
  filterString = '';
  selectedCluster;
  @ViewChild('template', {static: true}) template: any;
  clusterList: any[] = [
    {
      title: 'Cluster 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'but also the leap into electronic typesetting, remaining essentially unchanged.',
      icon: 'fa-code-merge',
      author: {
        name: 'Ali Arshad',
        email: 'email@aliarshad.info',
        contact: '+92-307-xxxxxxx'
      }
    },
    {
      title: 'Cluster 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'but also the leap into electronic typesetting, remaining essentially unchanged.',
      icon: 'fa-code-merge',
      author: {
        name: 'Ali Arshad',
        email: 'email@aliarshad.info',
        contact: '+92-307-xxxxxxx'
      }
    },
    {
      title: 'Cluster 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'but also the leap into electronic typesetting, remaining essentially unchanged.',
      icon: 'fa-code-merge',
      author: {
        name: 'Ali Arshad',
        email: 'email@aliarshad.info',
        contact: '+92-307-xxxxxxx'
      }
    },
    {
      title: 'Cluster 4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'but also the leap into electronic typesetting, remaining essentially unchanged.',
      icon: 'fa-code-merge',
      author: {
        name: 'Ali Arshad',
        email: 'email@aliarshad.info',
        contact: '+92-307-xxxxxxx'
      }
    },
    {
      title: 'Cluster 5',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'but also the leap into electronic typesetting, remaining essentially unchanged.',
      icon: 'fa-code-merge',
      author: {
        name: 'Ali Arshad',
        email: 'email@aliarshad.info',
        contact: '+92-307-xxxxxxx'
      }
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  private showDetails(cluster) {
    this.selectedCluster = cluster;
  }

}
