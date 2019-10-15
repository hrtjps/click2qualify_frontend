import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        data: {breadcrumbs: ['Admin', 'Dashboard']}
      },
    ]),    
  ],
})
export class DashboardModule {
}
