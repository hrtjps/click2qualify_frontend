import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from 'src/app/models/user';
import { USER_ROLE } from 'src/app/consts/consts';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList;
  currentPage = 1;
  page: number;
  countPerPage = 10;
  totalItems = 0;
  UserRole = USER_ROLE;
  filterString = "";
  
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private toastr: ToastrService,
    private commonService: CommonService
  ) { 
    this.userList = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data.data;
      this.cdr.markForCheck();
    })
  }

  pageChanged(event: any): void {
    this.page = event.page;
  }

  viewUserInfo(id) {
    this.router.navigate([`/admin/users/${id}`]);
  }
  editUserInfo(id) {
    this.router.navigate([`/admin/users/edit/${id}`]);
  }
  deleteUserInfo(id) {
    this.userService.deleteUser(id).subscribe(
      data => {
        this.toastr.success('Deleted a new user successfully!', 'Success');
        this.getAllData();
      },
      error => {
        this.toastr.error(this.commonService.convertReqErr2String(error.error), 'Error');
      }
    );
  }
}
