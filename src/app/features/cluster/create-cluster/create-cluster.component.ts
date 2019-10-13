import { Component, OnInit } from '@angular/core';
import { v1 } from "uuid";

@Component({
  selector: 'smart-create-cluster',
  templateUrl: './create-cluster.component.html',
  styleUrls: ['./create-cluster.component.scss']
})
export class CreateClusterComponent implements OnInit {
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
  clusterModel: any = new Object();

  instantTypeDDList: Array<any> = [
    { key: 't2.nano', name: 't2.nano, vCPU* 1, Mem 0.5' },
    { key: 't2.micro', name: 't2.micro, vCPU* 1, Mem 1' },
    { key: 't2.small', name: 't2.small, vCPU* 1, Mem 2' },
    { key: 't2.medium', name: 't2.medium, vCPU* 2, Mem 4' },
    { key: 't2.large', name: 't2.large, vCPU* 2, Mem 8' },
    { key: 't2.xlarge', name: 't2.xlarge, vCPU* 4, Mem 16' },
    { key: 't2.2xlarge', name: 't2.2xlarge, vCPU* 8, Mem 32' },
    
    { key: 't3.nano', name: 't3.nano, vCPU* 2, Mem 0.5' },
    { key: 't3.micro', name: 't3.micro, vCPU* 2, Mem 1' },
    { key: 't3.small', name: 't3.small, vCPU* 2, Mem 2' },
    { key: 't3.medium', name: 't3.medium, vCPU* 2, Mem 4' },
    { key: 't3.large', name: 't3.large, vCPU* 2, Mem 8' },
    { key: 't3.xlarge', name: 't3.xlarge, vCPU* 4, Mem 16' },
    { key: 't3.2xlarge', name: 't3.2xlarge, vCPU* 8, Mem 32' },
  ];

  zoneDDList: Array<any> = [
    { key: 'z1', name: 'Zone 1' },
    { key: 'z2', name: 'Zone 2' },
    { key: 'z3', name: 'Zone 3' },
  ];

  regionDDList: Array<any> = [
    { key: 'r1', name: 'Region 1' },
    { key: 'r2', name: 'Region 2' },
    { key: 'r3', name: 'Region 3' },
  ];

  constructor() { }

  ngOnInit() {
    this.clusterModel.InstantType = "";
    this.clusterModel.ZoneId = "";
    this.clusterModel.RegionId = "";

  }

  onZoneChange() {
    var index = this.zoneDDList.findIndex(m => m.key == this.clusterModel.ZoneId);
    if (index >= 0) {
      this.clusterModel.ZoneName = this.zoneDDList[index].name;
    }
  }

  onInstantTypeChange(){
    var index = this.instantTypeDDList.findIndex(m => m.key == this.clusterModel.InstantType);
    if (index >= 0) {
      this.clusterModel.InstantTypeName = this.instantTypeDDList[index].name;
    }
  }

  onRegionChange() {
    var index = this.regionDDList.findIndex(m => m.key == this.clusterModel.RegionId);
    if (index >= 0) {
      this.clusterModel.RegionName = this.regionDDList[index].name;
    }
  }

  getStatus(status) {
    if (status === "offline") {
      return {
        className: "text-c-red",
        label: "Offline"
      }
    } else if (status === "online") {
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
