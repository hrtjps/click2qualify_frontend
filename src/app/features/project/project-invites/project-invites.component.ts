import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'smart-project-invites',
  templateUrl: './project-invites.component.html',
  styleUrls: ['./project-invites.component.scss']
})
export class ProjectInvitesComponent implements OnInit {
  filterString = '';
  selectedProject;
  @ViewChild('template', {static: true}) template: any;
  projectList: any[] = [
    {
      title: 'Project 1',
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
      title: 'Project 2',
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
      title: 'Project 3',
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
      title: 'Project 4',
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
      title: 'Project 5',
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

  private showDetails(project) {
    this.selectedProject = project;
  }

}
