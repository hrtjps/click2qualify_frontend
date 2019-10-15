import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [UserListComponent, AddUserComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListComponent, data: {breadcrumbs: ['Users']}},
      // { path: 'add', component: AddUserComponent, data: {breadcrumbs: ['Users', 'Add A New User']}},
    ])
  ]
})
export class UsersModule { }
