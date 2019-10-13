import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'alerts' },
      { path: 'accordions', loadChildren: () => import('./accordions-page/accordions-page.module').then(m => m.AccordionsPageModule) },
      { path: 'alerts', loadChildren: () => import('./alerts-page/alerts-page.module').then(m => m.AlertsPageModule) },
      { path: 'badges', loadChildren: () => import('./badges-page/badges-page.module').then(m => m.BadgesPageModule) },
      { path: 'breadcrumbs', loadChildren: () => import('./breadcrumbs-page/breadcrumbs-page.module').then(m => m.BreadcrumbsPageModule) },
      {
        path: 'button-group', loadChildren: () => import('./button-group-page/button-group-page.module').then(m => m.ButtonGroupPageModule)
      },
      { path: 'buttons', loadChildren: () => import('./buttons-page/buttons-page.module').then(m => m.ButtonsPageModule) },
      { path: 'cards', loadChildren: () => import('./cards-page/cards-page.module').then(m => m.CardsPageModule) },
      { path: 'carousel', loadChildren: () => import('./carousel-page/carousel-page.module').then(m => m.CarouselPageModule) },
      { path: 'collapse', loadChildren: () => import('./collapse-page/collapse-page.module').then(m => m.CollapsePageModule) },
      { path: 'dropdowns', loadChildren: () => import('./dropdowns-page/dropdowns-page.module').then(m => m.DropdownsPageModule) },
      { path: 'modal', loadChildren: () => import('./modal-page/modal-page.module').then(m => m.ModalPageModule) },
      { path: 'navbars', loadChildren: () => import('./navbars-page/navbars-page.module').then(m => m.NavbarsPageModule) },
      { path: 'pagination', loadChildren: () => import('./pagination-page/pagination-page.module').then(m => m.PaginationPageModule) },
      { path: 'panels', loadChildren: () => import('./panels-page/panels-page.module').then(m => m.PanelsPageModule) },
      { path: 'popovers', loadChildren: () => import('./popovers-page/popovers-page.module').then(m => m.PopoversPageModule) },
      {
        path: 'progress-bars', loadChildren: () => import('./progress-bars-page/progress-bars-page.module')
          .then(m => m.ProgressBarsPageModule)
      },
      { path: 'spinners', loadChildren: () => import('./spinners-page/spinners-page.module').then(m => m.SpinnersPageModule) },
      { path: 'tabs-pills', loadChildren: () => import('./tabs-pills-page/tabs-pills-page.module').then(m => m.TabsPillsPageModule) },
      { path: 'tooltips', loadChildren: () => import('./tooltips-page/tooltips-page.module').then(m => m.TooltipsPageModule) },
    ]),
  ]
})
export class UiPagesModule { }
