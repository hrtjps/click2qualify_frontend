import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [IntroductionComponent, PrivacyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'introduction' },
      {
        path: 'introduction', component: IntroductionComponent,
        data: { breadcrumbs: ['Application Intel', 'Introduction'] }
      },
      { path: 'privacy', component: PrivacyComponent,
      data: { breadcrumbs: ['Application Intel', 'Privacy'] } }
    ])
  ]
})
export class AboutModule { }
