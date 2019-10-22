import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [ProfileComponent, ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {breadcrumbs: ['Common Info', 'User Profile']}
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        data: {breadcrumbs: ['Common Info', 'Contact Us']}
      },
    ])
  ]
})
export class CommonInfoModule { }
