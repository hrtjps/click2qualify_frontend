import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { AuthService } from 'src/app/services/auth.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'smart-tax-qa',
  templateUrl: './tax-qa.component.html',
  styleUrls: ['./tax-qa.component.scss']
})
export class TaxQAComponent implements OnInit {

  questions

  constructor(
    private cdr: ChangeDetectorRef,
    private questionService: QuestionsService,
  ) { 
    this.questions = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    // this.formsService.getUserAllTaxForms(this.authService.userId).subscribe(data => {
    
    this.questionService.getAllQuestions().subscribe(data => {
      this.questions = data.data.questions;
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
    })
  }
}
