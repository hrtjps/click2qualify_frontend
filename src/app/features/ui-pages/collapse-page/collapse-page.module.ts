import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsePageComponent } from './collapse-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [CollapsePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CollapsePageComponent, data: { breadcrumbs: ['UI Components', 'Collapse'] }}
    ]),
    UtilsModule,
    PanelsModule,
    CollapseModule
  ]
})
export class CollapsePageModule { }
