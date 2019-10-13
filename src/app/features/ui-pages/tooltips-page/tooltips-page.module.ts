import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipsPageComponent } from './tooltips-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [TooltipsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TooltipsPageComponent, data: { breadcrumbs: ['UI Components', 'Tooltips'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class TooltipsPageModule { }
