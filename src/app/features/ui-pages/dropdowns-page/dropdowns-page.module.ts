import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsPageComponent } from './dropdowns-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [DropdownsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DropdownsPageComponent, data: { breadcrumbs: ['UI Components', 'Dropdowns'] }}
    ]),
    UtilsModule,
    PanelsModule,
    BsDropdownModule
  ]
})
export class DropdownsPageModule { }
