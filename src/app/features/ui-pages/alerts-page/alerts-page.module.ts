import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { AlertsPageComponent } from './alerts-page.component';

@NgModule({
  declarations: [AlertsPageComponent],
  imports: [
    CommonModule,
    AlertModule,

    RouterModule.forChild([
      {path: '', component: AlertsPageComponent, data: { breadcrumbs: ['UI Components', 'Alerts'] }},
    ]),
    UtilsModule
  ]
})
export class AlertsPageModule { }
