import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss']
})
export class GatewayComponent implements OnInit {

  gatewayList: any[] = [
    {
      title: "Gateway 1",
      provider: "provider 1",
      owner: "owner 1",
      instanceType: 'instance 1',
      icon: "fa-code-merge",
    },
    {
      title: "Gateway 2",
      provider: "provider 1",
      owner: "owner 1",
      instanceType: 'instance 1',
      icon: "fa-code-merge",
    },
    {
      title: "Gateway 3",
      provider: "provider 1",
      owner: "owner 1",
      instanceType: 'instance 1',
      icon: "fa-code-merge",
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  viewGateway($event, gateway) {
    $event.stopPropagation();
  }

}
