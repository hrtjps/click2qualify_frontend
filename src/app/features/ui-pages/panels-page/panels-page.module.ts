import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsPageComponent } from './panels-page.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { UtilsModule } from 'src/app/shared/utils/utils.module';

@NgModule({
  declarations: [PanelsPageComponent],
  imports: [
    CommonModule,
    AlertModule,
    PanelsModule,
    UtilsModule,
    TabsModule,
    BsDropdownModule,
    RouterModule.forChild([{
      path: '', component: PanelsPageComponent,  data: { breadcrumbs: ['UI Components', 'Panels'] }
    }])
  ]
})
export class PanelsPageModule { }
