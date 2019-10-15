import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { AlertModule, CollapseModule, PopoverModule, TabsModule, PaginationModule } from 'ngx-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PanelsModule } from './panels/panels.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArchwizardModule,
    AngularDualListBoxModule,
    PanelsModule,
    AlertModule,
    CollapseModule.forRoot(),
    NgxDropzoneModule,   
    TabsModule.forRoot(),
    PaginationModule,
    PopoverModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ArchwizardModule,
    AngularDualListBoxModule,
    PanelsModule,
    AlertModule,
    CollapseModule,
    NgxDropzoneModule,
    FilterPipe,
    TabsModule,
    PopoverModule,
  ]
})
export class SharedModule {
}
