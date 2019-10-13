import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { GatewayComponent } from './gateway/gateway.component';
import { GatewayFilterPipe } from './gateway-filter.pipe';
import { GatewayEnrolmentsComponent } from './gateway-enrolments/gateway-enrolments.component';

@NgModule({
  declarations: [
    GatewayComponent,
    GatewayEnrolmentsComponent,
    GatewayFilterPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: GatewayComponent,
        data: { breadcrumbs: ['Gateway'] }
      },
      {
        path: '', component: GatewayEnrolmentsComponent,
        data: { breadcrumbs: ['Gateway', 'Gateway Enrolments'] }
      },
    ]),
    PanelsModule,
    AlertModule
  ],
})
export class GatewayModule { }
