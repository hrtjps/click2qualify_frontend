import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFormComponent } from './tax-form/tax-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TaxListComponent } from './tax-list/tax-list.component';
import { TaxQAComponent } from './tax-qa/tax-qa.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    TaxFormComponent,
    TaxListComponent,
    TaxQAComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'user-tax-list', pathMatch: 'full' },
      {
        path: 'user-tax-list',
        component: TaxListComponent,
        data: {breadcrumbs: ['User', 'Tax List']}
      },
      {
        path: 'user-tax-form/:id',
        component: TaxFormComponent,
        data: {breadcrumbs: ['User', 'Tax Form']}
      },
      {
        path: 'user-tax-qa/:id',
        component: TaxQAComponent,
        data: {breadcrumbs: ['User', 'Tax Question and Answer']}
      },
      {
        path: 'user-payment',
        component: PaymentComponent,
        data: {breadcrumbs: ['User', 'Payment']}
      },
    ])
  ]
})
export class HomeModule { }
