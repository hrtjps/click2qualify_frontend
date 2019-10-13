import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPageComponent } from './pagination-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [PaginationPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PaginationPageComponent, data: { breadcrumbs: ['UI Components', 'Pagination'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class PaginationPageModule { }
