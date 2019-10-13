import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LayoutOptionsComponent } from './layout-options/layout-options.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { SkinOptionsComponent } from './skin-options/skin-options.component';
import { SavingDbComponent } from './saving-db/saving-db.component';

@NgModule({
  declarations: [HowItWorksComponent, LayoutOptionsComponent, SkinOptionsComponent, SavingDbComponent],
  imports: [
    CommonModule,
    AlertModule,
    UiModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'how-it-works'},
      {path: 'how-it-works', component: HowItWorksComponent, data: { breadcrumbs: ['Theme Settings', 'How it works'] }},
      {path: 'layout-options', component: LayoutOptionsComponent, data: { breadcrumbs: ['Theme Settings', 'Layout Options'] }},
      {path: 'skin-options', component: SkinOptionsComponent, data: { breadcrumbs: ['Theme Settings', 'Skin Options'] }},
      {path: 'saving-db', component: SavingDbComponent, data: { breadcrumbs: ['Theme Settings', 'Saving to Database'] }}
    ])
  ]
})
export class SettingsModule { }
