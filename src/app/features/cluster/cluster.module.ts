import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { RouterModule } from '@angular/router';
import { ClusterComponent } from './cluster/cluster.component';
import { CreateClusterComponent } from './create-cluster/create-cluster.component';
import { AlertModule } from 'ngx-bootstrap';
import { AddExistingClustersComponent } from './add-existing-cluster/add-existing-cluster.component';
import { DetailClusterComponent } from './detail-cluster/detail-cluster.component';
import { ClusterFilterPipe } from './cluster-filter.pipe';
import { ClusterInvitesComponent } from './cluster-invite/cluster-invites.component';

@NgModule({
  declarations: [
    CreateClusterComponent,
    ClusterComponent,
    AddExistingClustersComponent,
    DetailClusterComponent,
    ClusterFilterPipe,
    ClusterInvitesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClusterComponent,
        data: {breadcrumbs: ['Cluster']}
      },
      {
        path: 'add-existing-cluster', component: AddExistingClustersComponent,
        data: { breadcrumbs: ['Cluster', 'Add Existing Cluster'] }
      },
      {
        path: 'detail-cluster', component: DetailClusterComponent,
        data: { breadcrumbs: ['Cluster', 'Detail Cluster'] }
      },
      {
        path: 'create-cluster', component: CreateClusterComponent,
        data: { breadcrumbs: ['Cluster', 'Create Cluster'] }
      },
    ]),
    PanelsModule,
    AlertModule
  ],
})
export class ClusterModule {
}
