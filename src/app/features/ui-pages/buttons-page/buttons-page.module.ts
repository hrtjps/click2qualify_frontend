import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsPageComponent } from './buttons-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [ButtonsPageComponent],
  imports: [
    RouterModule.forChild([
      {path: '', component: ButtonsPageComponent, data: { breadcrumbs: ['UI Components', 'Buttons'] }}
    ]),
    UtilsModule,
    PanelsModule,
    CommonModule
  ]
})
export class ButtonsPageModule { }
