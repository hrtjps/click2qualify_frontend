import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collectionList: any[] = [
    {
      title: "Collection 1",
      api: "api 1",
      description: "description 1",
      icon: "fa-code-merge",
    },
    {
      title: "Collection 2",
      api: "api 1",
      description: "description 1",
      icon: "fa-code-merge",
    },
    {
      title: "Collection 3",
      api: "api 1",
      description: "description 1",
      icon: "fa-code-merge",
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  viewCollection($event, collection) {
    $event.stopPropagation();
  }

}
