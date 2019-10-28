import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { USER_ROLE } from 'src/app/consts/consts';
import { QuestionsService } from 'src/app/services/questions.service';
import { GridOptions } from 'ag-grid-community';
import { Page } from 'src/app/shared/table/page.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'smart-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  tableList;
  
  columns = [
    {name: 'title', title: 'Title'},
    {name: 'step', title: 'Question/Answer Step'},
    {name: 'id', title: 'Step Number'},
  ];
  
  dropDownMenu = [
    {
      name: 'edit',
      label: 'Edit'
    },
  ];

  
  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private commonService: CommonService
  ) { 
    this.tableList = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.questionService.getAllQuestions().subscribe(data => {
      this.tableList = data.data.questions;
      this.cdr.markForCheck();
    })
  }
  
  buttonClicked($event) {
    console.log($event);
    if( $event.btn == "delete") {
      this.questionService.deleteQuestion($event.data._id).subscribe (
        data => {
          this.toastr.success('Updated a question successfully!', 'Success');
          this.getAllData();
        },
        error => {
          this.toastr.error(this.commonService.convertReqErr2String(error.error), 'Error');
        }
      )
    } else if( $event.btn=="edit") {
      this.router.navigate([`/admin/questions/edit/${$event.data._id}`]);
    }
  }
}
