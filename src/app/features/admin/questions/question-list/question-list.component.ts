import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { USER_ROLE } from 'src/app/consts/consts';
import { QuestionsService } from 'src/app/services/questions.service';
import { GridOptions } from 'ag-grid-community';
import { Page } from 'src/app/shared/table/page.model';

@Component({
  selector: 'smart-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  tableList;
  countPerPage = 10;
  currentPage = 1;
  
  constructor(
    private questionService: QuestionsService,
    private cdr: ChangeDetectorRef
  ) { 
    this.tableList = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.questionService.getAllQuestions().subscribe(data => {
      this.tableList = data.data.questions;
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
    })
  }

}
