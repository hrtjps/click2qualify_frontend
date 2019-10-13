import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavFilterComponent } from './nav-filter/nav-filter.component';
import { NavInfoCardComponent } from './nav-info-card/nav-info-card.component';
import { NavComponent } from './nav/nav.component';
import { NavFilterMsgComponent } from './nav-filter-msg/nav-filter-msg.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    NavFilterComponent, NavInfoCardComponent, NavComponent, NavFilterMsgComponent,
    NavigationComponent, NavItemComponent, NavFooterComponent,
  ],
  exports: [
    NavFilterComponent, NavInfoCardComponent, NavComponent, NavFilterMsgComponent, NavigationComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    TooltipModule,
    UtilsModule
  ]
})
export class NavigationModule { }
