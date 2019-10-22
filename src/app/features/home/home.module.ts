import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFormComponent } from './tax-form/tax-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TaxListComponent } from './tax-list/tax-list.component';
import { TaxQAComponent } from './tax-qa/tax-qa.component';

@NgModule({
  declarations: [
    TaxFormComponent,
    TaxListComponent,
    TaxQAComponent
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
        path: 'user-tax-form',
        component: TaxFormComponent,
        data: {breadcrumbs: ['User', 'Tax Form']}
      },
      {
        path: 'user-tax-qa',
        component: TaxQAComponent,
        data: {breadcrumbs: ['User', 'Tax Question and Answer']}
      },
    ])
  ]
})
export class HomeModule { }
