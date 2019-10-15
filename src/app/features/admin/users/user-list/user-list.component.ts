import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // private usersSubj = new BehaviorSubject<Array<any>>([]);
  userList; // : Observable<Array<any>> = this.usersSubj.asObservable();
  users: Observable<User[]>;
  currentPage = 1;
  page: number;
  countPerPage = 10;
  totalItems = 0;
  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { 
    this.userList = [];
    console.log("hello");
  }

  ngOnInit() {

    // this.users = this.userService.users; // subscribe to entire collection 

    // this.userService.loadAll();    // load all todos
    // // this.todoService.load('1');    // load only todo with id of '1'
    this.getAllData();
  }

  getAllData() {
    this.userService.getAllUsers().subscribe(data => {
      
      console.log(data);
      // this.usersSubj.next(data.data.users);
      this.userList = data.data;
      console.log(this.userList);
      console.log(this.userList[0]);
      
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
      
    })
  }


  pageChanged(event: any): void {
    this.page = event.page;
  }
}
