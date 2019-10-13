import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPillsPageComponent } from './tabs-pills-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [TabsPillsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TabsPillsPageComponent, data: { breadcrumbs: ['UI Components', 'Tabs Pills'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class TabsPillsPageModule { }
