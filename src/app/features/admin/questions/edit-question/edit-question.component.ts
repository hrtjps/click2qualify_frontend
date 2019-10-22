import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { CommonService } from 'src/app/services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'smart-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {

  loading = false;
  dataModel: any = new Object();
  isSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private commonService: CommonService,
    private questionsService: QuestionsService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.questionsService.getQuestion(id).subscribe((data: any) => {
      console.log(data);
      this.dataModel = {...data.data};
      console.log(this.dataModel);
      this.cdr.markForCheck();
    })
  }

  onEditItem(form){
    this.isSubmitted = true;
    if (!form.valid) {
      return;
    }
    this.loading = true;
    this.questionsService.updateQuestion(this.dataModel._id, form.value).subscribe(
      data => {
        this.resetForm();
        this.toastr.success('Updated a question successfully!', 'Success');
        this.router.navigate(['admin/questions'])
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
