import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPageComponent } from './cards-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';

@NgModule({
  declarations: [CardsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CardsPageComponent, data: { breadcrumbs: ['UI Components', 'Cards'] }}
    ]),
    UtilsModule,
    PanelsModule,
  ]
})
export class CardsPageModule { }
