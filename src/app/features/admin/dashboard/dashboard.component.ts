import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormsService } from 'src/app/services/forms.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersCount;
  formsCount;
  questionCount;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.userService.getTotalCount().subscribe((data:any) => {
      this.usersCount = data.data.userCount;
      this.formsCount = data.data.formCount;
      this.questionCount = data.data.questionCount;
      this.cdr.markForCheck();
    });
  }

}
