import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { DeploymentComponent } from './deployment/deployment.component';
import { CreateDeploymentComponent } from './create-deployment/create-deployment.component';
import { ListDeploymentsComponent } from './list-deployments/list-deployments.component';

@NgModule({
  declarations: [
    DeploymentComponent,
    CreateDeploymentComponent,
    ListDeploymentsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: DeploymentComponent,
        data: { breadcrumbs: ['Deployment'] }
      },
      {
        path: 'create-deployment', component: CreateDeploymentComponent,
        data: { breadcrumbs: ['Deployment', 'Create Deployment'] }
      },
    ]),
    PanelsModule,
    AlertModule
  ],
})
export class DeploymentModule { }
