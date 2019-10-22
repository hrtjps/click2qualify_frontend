import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'smart-tax-qa',
  templateUrl: './tax-qa.component.html',
  styleUrls: ['./tax-qa.component.scss']
})
export class TaxQAComponent implements OnInit {
  oweForm: FormGroup = new FormGroup({
    check_owe: new FormControl('', Validators.required)
  });
  irsForm: FormGroup = new FormGroup({
    check_IRS: new FormControl('', Validators.required)
  })
  questions;
  curStep="owe";
  curStepProgress=0;
  steps
  @ViewChild('template', {static: true}) template: any;

  modalRef: BsModalRef;
  constructor(
    private cdr: ChangeDetectorRef,
    private questionService: QuestionsService,
    private modalService: BsModalService,
    private formsService: FormsService,
    private toastr: ToastrService
  ) { 
    this.questions = [];
    this.steps=[];
  }

  ngOnInit() {
    this.getAllData();
  }

  public showModal() {
    this.modalRef = this.modalService.show(this.template, {
      class: 'modal-dialog-right chat-modal'
    });
  }

  public hideModal() {
    if (this.modalRef) {
      this.modalRef.hide();
      this.modalRef = null;
    }
  }

  getAllData() {    
    this.questionService.getAllQuestions().subscribe(data => {
      this.questions = data.data.questions;
      this.steps = this.questions.map(it =>(it.step))
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
    })
  }
  getPrevious(curStep) {
    let index = this.steps.indexOf(curStep);
    this.curStepProgress=index-1;
    this.curStep = this.steps[index-1];
  }

  moveNextStep(curStep) {
    let index = this.steps.indexOf(curStep);
    this.curStepProgress=index+1;
    this.curStep = this.steps[index+1];
  }

  skipSection(nextStep, curStep) {
    nextStep = nextStep.replace('-container', '');
    let index = this.steps.indexOf(nextStep)
    this.curStepProgress=index;
    this.curStep = this.steps[index];
  }

  route(formName, formValue) {
    let qid =this.questions.find(it => it.step === this.curStep).id;
    let taxId=1;
    console.log(formValue);
    this.formsService.addQA(qid, taxId, formValue.value).subscribe((data: any) => {
      if(data.status =="success") {
        this.toastr.success(data.message, 'Success');
      } else {
        this.toastr.error(data.message, 'Error');
      }
    });
    this.moveNextStep(this.curStep);
  }
}
