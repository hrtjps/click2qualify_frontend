import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { AlertModule, CollapseModule, PopoverModule, TabsModule } from 'ngx-bootstrap';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectInvitesComponent } from './project-invites/project-invites.component';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectComponent,
    ProjectFilterPipe,
    ProjectInvitesComponent
  ],
  imports: [
    SharedModule,
    TabsModule.forRoot(),
    PopoverModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectComponent,
        data: {breadcrumbs: ['Project']}
      },
      {
        path: 'create-project',
        component: CreateProjectComponent,
        data: {breadcrumbs: ['Project', 'Create Project']}
      },
    ]),    
  ],
})
export class ProjectModule {
}
