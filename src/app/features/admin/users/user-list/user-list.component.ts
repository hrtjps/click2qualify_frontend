import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from 'src/app/models/user';
import { USER_ROLE } from 'src/app/consts/consts';
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
    private cdr: ChangeDetectorRef
  ) { 
    this.userList = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.userService.getAllUsers().subscribe(data => {
      
      this.userList = data.data;
      
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
      
    })
  }

  pageChanged(event: any): void {
    this.page = event.page;
  }
}
