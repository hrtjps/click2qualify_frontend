import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListingComponent } from './table-listing/table-listing.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PanelsModule } from '../panels/panels.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [TableListingComponent],
  exports: [TableListingComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    PanelsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot()
  ]
})
export class TableModule {
}
