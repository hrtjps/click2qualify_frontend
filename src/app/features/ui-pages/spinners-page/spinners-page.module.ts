import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnersPageComponent } from './spinners-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [SpinnersPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SpinnersPageComponent, data: { breadcrumbs: ['UI Components', 'Spinners'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class SpinnersPageModule { }
