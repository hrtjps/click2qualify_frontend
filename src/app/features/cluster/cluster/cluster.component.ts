import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit {

  clusterList: any[] = [
    {
      title: "Cluster 1",
      provider: "provider 1",
      owner: "owner 1",
      instanceType: 'instance 1',
      icon: "fa-code-merge",
    },
    {
      title: "Cluster 2",
      provider: "provider 1",
      owner: "owner 1",
      instanceType: 'instance 1',
      icon: "fa-code-merge",
    },
    {
      title: "Cluster 3",
      provider: "provider 1",
      owner: "owner 1",
      instanceType: 'instance 1',
      icon: "fa-code-merge",
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  viewCluster($event, cluster) {
    $event.stopPropagation();
  }
}
