import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarsPageComponent } from './navbars-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [NavbarsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: NavbarsPageComponent, data: { breadcrumbs: ['UI Components', 'Navbars'] }}
    ]),
    UtilsModule,
    PanelsModule,
    BsDropdownModule
  ]
})
export class NavbarsPageModule { }
