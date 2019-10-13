import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPageComponent } from './modal-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [ModalPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ModalPageComponent, data: { breadcrumbs: ['UI Components', 'Modal'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class ModalPageModule { }
