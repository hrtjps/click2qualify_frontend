import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./features/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'questions', loadChildren: () => import('./features/questions/questions.module').then(m => m.QuestionsModule) },
      { path: 'users', loadChildren: () => import('./features/admin/users/users.module').then(m => m.UsersModule) },
    ],
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'auth', loadChildren: () => import('./features/authentication/auth.module').then(m => m.AuthModule)
  },
  
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
