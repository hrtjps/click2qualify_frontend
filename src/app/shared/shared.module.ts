import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'ng2-archwizard/dist';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { AlertModule, CollapseModule, PopoverModule, TabsModule } from 'ngx-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PanelsModule } from './panels/panels.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArchwizardModule,
    AngularDualListBoxModule,
    PanelsModule,
    AlertModule,
    CollapseModule,
    NgxDropzoneModule,   
    TabsModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [
    FormsModule,
    CommonModule,
    ArchwizardModule,
    AngularDualListBoxModule,
    PanelsModule,
    AlertModule,
    CollapseModule,
    NgxDropzoneModule,   
    TabsModule,
    FilterPipe,
    TabsModule,
    PopoverModule,
    CollapseModule
  ]
})
export class SharedModule {
}
