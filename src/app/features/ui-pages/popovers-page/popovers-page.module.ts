import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoversPageComponent } from './popovers-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { PopoverModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [PopoversPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PopoversPageComponent, data: { breadcrumbs: ['UI Components', 'Popovers'] }}
    ]),
    UtilsModule,
    PanelsModule,
    PopoverModule
  ]
})
export class PopoversPageModule { }
