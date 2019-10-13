import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';
import { LayoutModule } from './shared/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      
      { path: 'project', loadChildren: () => import('./features/project/project.module').then(m => m.ProjectModule) },
      { path: 'cluster', loadChildren: () => import('./features/cluster/cluster.module').then(m => m.ClusterModule) },
      { path: 'gateway', loadChildren: () => import('./features/gateway/gateway.module').then(m => m.GatewayModule) },
      { path: 'deployment', loadChildren: () => import('./features/deployment/deployment.module').then(m => m.DeploymentModule) },
      { path: 'collection', loadChildren: () => import('./features/collection/collection.module').then(m => m.CollectionModule) },

      { path: 'intel', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
      { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },
      { path: 'info', loadChildren: () => import('./features/info/info.module').then(m => m.InfoModule) },
      { path: 'ui', loadChildren: () => import('./features/ui-pages/ui-pages.module').then(m => m.UiPagesModule) },
      { path: 'icons', loadChildren: () => import('./features/icons/icons.module').then(m => m.IconsModule) },
    ],
  },
  {
    path: 'auth', loadChildren: () => import('./features/authentication/auth.module').then(m => m.AuthModule)
  },
  
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
