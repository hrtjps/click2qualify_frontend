import { Component, OnInit } from "@angular/core";
import {v1} from "uuid";
import {IService} from "../../../types/services/service"

@Component({
  selector: "app-add-existing-cluster",
  templateUrl: "./add-existing-cluster.component.html",
  styleUrls: ["./add-existing-cluster.component.scss"]
})
export class AddExistingClustersComponent implements OnInit {
  // serviceList: any[]  = []
  serviceList: any[] = [
    {
      id: "12",
      name: "Random Name",
      version: "1.02.0",
      thumbnail: "assets/images/slider/img-slide-1.jpg",
      type: "Random URL",
      status: "offline"
    },
    {
      id: "12",
      name: "Name",
      version: "3.7.6",
      thumbnail: "assets/images/slider/img-slide-2.jpg",
      type: "Random URL",
      status: "online"
    },
    {
      id: "12",
      name: "Name-Name",
      version: "3.7.6",
      thumbnail: "assets/images/slider/img-slide-3.jpg",
      type: "Random URL",
      status: "online"
    },
  ]
  projectUsers: any[] = [
    {
      name: 'Silje Larsen',
      image: 'assets/images/user/avatar-1.jpg'
    },
    {
      name: 'Julie Vad',
      image: 'assets/images/user/avatar-2.jpg'
    },
    {
      name: "Storm Hanse",
      image: 'assets/images/user/avatar-3.jpg'
    }
  ]
  addService: boolean = false
  viewService: boolean = false

  constructor() { }

  ngOnInit() {
  }

  getStatus(status) {
    if(status === "offline") {
      return {
        className: "text-c-red",
        label: "Offline"
      }
    } else if(status === "online") {
      return {
        className: "text-c-green",
        label: "Online"
      }
    } else {
      return {
        className: "gray",
        label: "Inactive"
      }
    }
  }

  goBackToProject() {
    this.addService = false
    this.viewService = false
  }
  gotToAddService() {
    this.addService = true
    this.viewService = false
  }
  gotToService(id) {
    this.addService = false
    this.viewService = true
  }

  saveService() {
    const id = v1()
    this.serviceList.push({
      id,
      name: "Recently Added Service",
      version: "3.7.6",
      thumbnail: "assets/images/slider/img-slide-3.jpg",
      type: "Service type",
      status: "inactive"
    })
    this.gotToService(id) 
  }

}
