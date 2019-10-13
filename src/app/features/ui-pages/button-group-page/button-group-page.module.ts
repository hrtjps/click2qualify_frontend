import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupPageComponent } from './button-group-page.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from 'src/app/shared/utils/utils.module';
import { PanelsModule } from 'src/app/shared/panels/panels.module';
import { ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonGroupPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ButtonGroupPageComponent, data: { breadcrumbs: ['UI Components', 'Button Group'] }}
    ]),
    UtilsModule,
    PanelsModule,
    ButtonsModule,
    BsDropdownModule,
    FormsModule
  ]
})
export class ButtonGroupPageModule { }
