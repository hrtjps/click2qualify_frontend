import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'common-info',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/common-info/common-info.module').then(m => m.CommonInfoModule),
  },
  {
    path: 'admin',
    component: MainComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./features/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'customer-form', loadChildren: () => import('./features/admin/customer-forms/customer-forms.module').then(m => m.CustomerFormsModule) },
      { path: 'questions', loadChildren: () => import('./features/admin/questions/questions.module').then(m => m.QuestionsModule) },
      { path: 'users', loadChildren: () => import('./features/admin/users/users.module').then(m => m.UsersModule) },
    ],
  },
  {
    path: 'auth', loadChildren: () => import('./features/authentication/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
  
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
