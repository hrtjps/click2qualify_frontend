import { Component, OnInit } from "@angular/core";
// import { v1 } from "uuid";
// import { IService } from "../../../types/services/service"
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
@Component({
  selector: "smart-portal-deployment",
  templateUrl: "./create-deployment.component.html",
  styleUrls: ["./create-deployment.component.scss"]
})
export class CreateDeploymentComponent implements OnInit {
  collapsed = false;
  keepSorted = true;
  isNewDeploay = false;
  selectedCluster = '';
  selectedClusterName = '';
  selectedProject = '';
  deploymentPlanName = '';
  deploymentPlanDesc = '';
  //format: any = DualListComponent.DEFAULT_FORMAT;
  emptyStateConfig = {
    title: 'No project found!',
    content: `You haven't added any project yet. Add your first project!`,
    btnTitle: 'Add a project',
    link: '/create-project',
  }

  private confirmedServiceList = new Array<any>();
  private serviceList: Array<any> = [
    { key: 1, name: 'Servie 1' },
    { key: 2, name: 'Servie 2' },
    { key: 3, name: 'Servie 3' },
    { key: 4, name: 'Servie 4' },
    { key: 5, name: 'Servie 5' }
  ];
  private clusterList: Array<any> = [
    { key: 1, name: 'Cluster A' },
    { key: 2, name: 'Cluster B' },
    { key: 3, name: 'Cluster C' },
  ];

  private projectListDD: Array<any> = [
    { key: 1, name: 'Project A' },
    { key: 2, name: 'Project B' },
    { key: 3, name: 'Project C' },
  ];

  private envListDD: Array<any> = [
    { key: 1, name: 'Environment A' },
    { key: 2, name: 'Environment B' },
    { key: 3, name: 'Environment C' },
  ];

  projectList: object[] = [
    {
      name: 'Random Project Name 1',
      secondaryInfo: 'Some secondary information',
      imageUrl: 'assets/images/user/avatar-1.jpg',
      numberOfServices: 6,
      offlineServices: 0,
      warningServices: 1,
    },
    {
      name: 'Random Project Name 2',
      secondaryInfo: 'Some secondary information',
      imageUrl: 'assets/images/user/avatar-2.jpg',
      numberOfServices: 16,
      offlineServices: 3,
      warningServices: 1,
    },
    {
      name: 'Random Project Name 3',
      secondaryInfo: 'Some secondary information',
      imageUrl: 'assets/images/user/avatar-3.jpg',
      numberOfServices: 38,
      offlineServices: 1,
      warningServices: 0,
    }

  ]

  constructor() { }

  ngOnInit() {
  }

  confirmAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Create a new deployment',
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true
    }).then((willDelete) => {
      if (willDelete.value) {
        this.isNewDeploay = false;
      } else {
        // Swal('', 'Your imaginary file is safe!', 'error');
      }
    });
  }

  calculatePercentage(a, b) {
    const percentage = 100 - (b / a * 100)
    return {
      first: Math.round(percentage * 100) / 100,
      second: Math.round((100 - percentage) * 100) / 100
    }
  }

  doAdd() {
    for (let i = 0, len = this.serviceList.length; i < len; i += 1) {
      const o = this.serviceList[i];
      const found = this.confirmedServiceList.find((e: any) => e === o);
      if (!found) {
        this.confirmedServiceList.push(o);
        break;
      }
    }
  }

  doRemove() {
    if (this.confirmedServiceList.length > 0) {
      this.confirmedServiceList.splice(0, 1);
    }
  }

  onClusterChange() {
    var index = this.clusterList.findIndex(m => m.key == this.selectedCluster);
    if (index >= 0) {
      this.selectedClusterName = this.clusterList[index].name;
    }
  }

  onNewdeploymentStart()
  {
    this.isNewDeploay = true;
    this.confirmedServiceList = new Array<any>();
    this.selectedCluster = '';
    this.selectedClusterName = '';
  }
}
