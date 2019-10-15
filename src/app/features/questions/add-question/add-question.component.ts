import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'smart-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  loading = false;
  dataModel: any = new Object();
  isSubmitted = false;
  constructor(
    private questionSerivce: QuestionsService,
    private toastr: ToastrService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  onAddItem(form){
    this.isSubmitted = true;
    if (!form.valid) {
      return;
    }
    this.loading = true;
    this.questionSerivce.addQuestion(form.value).subscribe(
      data => {
        this.resetForm();
        this.toastr.success('Added a new question successfully!', 'Success');
      },
      error => {
        this.toastr.error(this.commonService.convertReqErr2String(error.error), 'Error');
        this.loading = false;
      }
    )
  }

  resetForm() {
    this.dataModel = new Object();
    this.isSubmitted = false;
  }

}
