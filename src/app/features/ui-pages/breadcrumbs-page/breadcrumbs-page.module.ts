import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsPageComponent } from './breadcrumbs-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [BreadcrumbsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BreadcrumbsPageComponent, data: { breadcrumbs: ['UI Components', 'Breadcrumbs'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class BreadcrumbsPageModule { }
