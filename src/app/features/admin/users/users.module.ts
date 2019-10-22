import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';



@NgModule({
  declarations: [UserListComponent, AddUserComponent, EditUserComponent, ViewUserInfoComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListComponent, data: {breadcrumbs: ['Users']}},
      { path: 'add', component: AddUserComponent, data: {breadcrumbs: ['Users', 'Add A New User']}},
      { path: 'edit/:id', component: EditUserComponent, data: {breadcrumbs: ['Users', 'Edit User']}},
      { path: ':id', component: ViewUserInfoComponent, data: {breadcrumbs: ['Users', 'User Info']}},
    ])
  ]
})
export class UsersModule { }
