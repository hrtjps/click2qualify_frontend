import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormListComponent } from './customer-form-list/customer-form-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerFormListComponent
  ],
imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerFormListComponent,
        data: {breadcrumbs: ['Admin', 'Customer Forms'] }
      },
    ]),
  ],
})
export class CustomerFormsModule { }
