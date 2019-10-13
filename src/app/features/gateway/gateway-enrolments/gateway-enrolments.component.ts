import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'smart-gateway-enrolments',
  templateUrl: './gateway-enrolments.component.html',
  styleUrls: ['./gateway-enrolments.component.scss']
})
export class GatewayEnrolmentsComponent implements OnInit {
  filterString = '';
  selectedGateway;
  @ViewChild('template', {static: true}) template: any;
  gatewayList: any[] = [
    {
      title: 'Gateway 1',
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
      title: 'Gateway 2',
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
      title: 'Gateway 3',
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
      title: 'Gateway 4',
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
      title: 'Gateway 5',
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

  private showDetails(gateway) {
    this.selectedGateway = gateway;
  }

}
