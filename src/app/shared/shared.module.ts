import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { AlertModule, CollapseModule, PopoverModule, TabsModule, PaginationModule, ProgressbarModule, BsDropdownModule } from 'ngx-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PanelsModule } from './panels/panels.module';
import { FilterPipe } from './pipes/filter.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { TableModule } from './table/table.module';
import { EmptyStringPipe } from './pipes/empty.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    EmptyStringPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
    AngularDualListBoxModule,
    PanelsModule,
    AlertModule,
    CollapseModule.forRoot(),
    NgxDropzoneModule,   
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule,
    PopoverModule.forRoot(),
    AgGridModule.withComponents([]),
    ProgressbarModule.forRoot(),
    TableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
    AngularDualListBoxModule,
    PanelsModule,
    AlertModule,
    CollapseModule,
    NgxDropzoneModule,
    FilterPipe,
    TabsModule,
    PopoverModule,
    AgGridModule,
    TableModule,
    ProgressbarModule,
    BsDropdownModule
  ]
})
export class SharedModule {
}
