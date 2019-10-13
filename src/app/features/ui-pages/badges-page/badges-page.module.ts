import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesPageComponent } from './badges-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [BadgesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BadgesPageComponent, data: { breadcrumbs: ['UI Components', 'Badges'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class BadgesPageModule { }
