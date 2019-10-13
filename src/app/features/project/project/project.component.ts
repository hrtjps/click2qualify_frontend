import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectList: any[] = [
    {
      title: "Project 1",
      body: "body 1",
      icon: "fa-code-merge",
    },
    {
      title: "Project 2",
      body: "body 1",
      icon: "fa-code-merge",
    },
    {
      title: "Project 3",
      body: "body 1",
      icon: "fa-code-merge",
    },
    {
      title: "Project 4",
      body: "body 1",
      icon: "fa-code-merge",
    },
    {
      title: "Project 5",
      body: "body 1",
      icon: "fa-code-merge",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
