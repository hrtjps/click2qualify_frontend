import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselPageComponent, HolderjsDirective } from './carousel-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [CarouselPageComponent, HolderjsDirective],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CarouselPageComponent, data: { breadcrumbs: ['UI Components', 'Carousel'] }}
    ]),
    UtilsModule,
    PanelsModule,
    CarouselModule
  ]
})
export class CarouselPageModule { }
