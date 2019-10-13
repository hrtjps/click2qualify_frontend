import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarsPageComponent } from './progress-bars-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [ProgressBarsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProgressBarsPageComponent, data: { breadcrumbs: ['UI Components', 'Progress Bars'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class ProgressBarsPageModule { }
