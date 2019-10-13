import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLicensingComponent } from './product-licensing/product-licensing.component';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DifferentFlavorsComponent } from './different-flavors/different-flavors.component';

@NgModule({
  declarations: [ProductLicensingComponent, DifferentFlavorsComponent],
  imports: [
    CommonModule,
    AccordionModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'product-licensing'},
      {path: 'product-licensing', component: ProductLicensingComponent,
      data: { breadcrumbs: ['Package Info', 'App & Plugin Licensing'] }},
      {path: 'different-flavors', component: DifferentFlavorsComponent,
      data: { breadcrumbs: ['Package Info', 'Different Flavors'] }},
    ])
  ]
})
export class InfoModule { }
