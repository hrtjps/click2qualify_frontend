import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

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
  });
  irsAmountForm: FormGroup = new FormGroup({
    IRS_amount: new FormControl('', Validators.required)
  });
  stateForm: FormGroup = new FormGroup({
    check_State: new FormControl('', Validators.required)
  });
  stateAmountForm: FormGroup = new FormGroup({
    State_amount: new FormControl('', Validators.required)
  });
  taxReturnsForm: FormGroup = new FormGroup({
    tax_returns: new FormControl('', Validators.required)
  });
  lastYearForm: FormGroup = new FormGroup({
    last_year: new FormControl('', Validators.required)
  });
  noticeReceiveForm: FormGroup = new FormGroup({
    notice_receive: new FormControl('', Validators.required)
  });
  moneyTakenForm: FormGroup = new FormGroup({
    money_taken: new FormControl('', Validators.required)
  });
  deepBreathForm: FormGroup = new FormGroup({
    deep_breath: new FormControl('', Validators.required)
  });
  phoneCallForm: FormGroup = new FormGroup({
    phone_call: new FormControl('', Validators.required)
  });
  phoneNumberForm: FormGroup = new FormGroup({
    phone_number: new FormControl('', Validators.required)
  });
  callYouSoonForm: FormGroup = new FormGroup({});
  youMarriedForm: FormGroup = new FormGroup({
    you_married: new FormControl('', Validators.required)
  });
  marriedForm: FormGroup = new FormGroup({
    married: new FormControl('', Validators.required)
  });
  spouseNameForm: FormGroup = new FormGroup({
    spouse_name: new FormControl('', Validators.required)
  });
  singleForm: FormGroup = new FormGroup({
    single: new FormControl('', Validators.required)
  });
  addressForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });
  cellNumberForm: FormGroup = new FormGroup({
    cell_number: new FormControl('', Validators.required)
  });
  workPhoneNumberForm: FormGroup = new FormGroup({
    work_phone_number: new FormControl('', Validators.required)
  });
  workCellNumberForm: FormGroup = new FormGroup({
    work_cell_number: new FormControl('', Validators.required)
  });
  dependentsForm: FormGroup = new FormGroup({
    dependents: new FormControl('', Validators.required)
  });
  SSNForm: FormGroup = new FormGroup({});
  dobForm: FormGroup = new FormGroup({
    dob: new FormControl('', Validators.required)
  });
  againSecurityForm: FormGroup = new FormGroup({});
  employerNameForm: FormGroup = new FormGroup({
    employer_name: new FormControl('', Validators.required)
  });
  workAddressForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });
  occupationForm: FormGroup = new FormGroup({
    occupation: new FormControl('', Validators.required)
  });
  withholdingsForm: FormGroup = new FormGroup({
    withholdings: new FormControl('', Validators.required)
  });
  spouseWorkForm: FormGroup = new FormGroup({
    spouse_work: new FormControl('', Validators.required)
  });
  spouseWorkAddressForm: FormGroup = new FormGroup({
    spouse_work_address: new FormControl('', Validators.required)
  });
  spouseWorkPhoneNumberForm: FormGroup = new FormGroup({
    spouse_work_phone_number: new FormControl('', Validators.required)
  });
  spouseOccupationForm: FormGroup = new FormGroup({
    spouse_occupation: new FormControl('', Validators.required)
  });
  spouseWithholdingsForm: FormGroup = new FormGroup({
    spouse_withholdings: new FormControl('', Validators.required)
  });
  lawsuitPartyForm: FormGroup = new FormGroup({
    check_lawsuit_party: new FormControl('', Validators.required)
  });
  lawsuitAddressForm: FormGroup = new FormGroup({
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });
  representedByForm: FormGroup = new FormGroup({
    represented_by: new FormControl('', Validators.required)
  });
  docketNumberForm: FormGroup = new FormGroup({
    docket_number: new FormControl('', Validators.required)
  });
  suitAmountForm: FormGroup = new FormGroup({
    suit_amount: new FormControl('', Validators.required)
  });
  completionDateForm: FormGroup = new FormGroup({
    completion_date: new FormControl('', Validators.required)
  });
  bankruptcyForm: FormGroup = new FormGroup({
    check_bankruptcy: new FormControl('', Validators.required)
  });
  lawSuitSubjectForm: FormGroup = new FormGroup({
    law_suit_subject: new FormControl('', Validators.required)
  });
  petitionNumberForm: FormGroup = new FormGroup({
    petition_number: new FormControl('', Validators.required)
  });
  dismissedDischargedForm: FormGroup = new FormGroup({
    dismissed_discharged: new FormControl(new Date(), Validators.required),
    dismissed_date: new FormControl(new Date(), Validators.required),
    discharged_date: new FormControl(new Date(), Validators.required),
  });
  petitionFiledForm: FormGroup = new FormGroup({
    petition_filed: new FormControl('', Validators.required)
  });
  livedOutsideForm: FormGroup = new FormGroup({
    from_date: new FormControl('', Validators.required),
    to_date: new FormControl('', Validators.required),
  });
  insurancePolicyForm: FormGroup = new FormGroup({
    check_insurance_policy: new FormControl('', Validators.required)
  });
  policyDetailsForm: FormGroup = new FormGroup({
    policy_details: new FormArray([ 
      new FormGroup({
        policy_name: new FormControl('', Validators.required),
        amount_receive: new FormControl('', Validators.required),
        receive_date: new FormControl('', Validators.required),
      })
    ])
  });
  trustNameForm: FormGroup = new FormGroup({
    trust_name: new FormControl('', Validators.required)
  });
  safeDepositForm: FormGroup = new FormGroup({
    check_safe_deposit: new FormControl('', Validators.required)
  });
  boxAddressForm: FormGroup = new FormGroup({
    box_address: new FormControl('', Validators.required)
  });
  summarizeBoxForm: FormGroup = new FormGroup({
    summarize_box: new FormControl('', Validators.required)
  });
  estimatedValueForm: FormGroup = new FormGroup({
    estimated_value: new FormControl('', Validators.required)
  });
  actualTimeValueForm: FormGroup = new FormGroup({
    actual_time_value: new FormControl('', Validators.required)
  });
  worthTransferredForm: FormGroup = new FormGroup({
    worth_transferred: new FormControl('', Validators.required)
  });
  dateTransferredForm: FormGroup = new FormGroup({
    date_transferred: new FormControl('', Validators.required)
  });
  transferredFromForm: FormGroup = new FormGroup({
    transferred_from: new FormControl('', Validators.required)
  });
  needABreakForm: FormGroup = new FormGroup({
    check_need_a_break: new FormControl('', Validators.required)
  });
  bankingAccountForm: FormGroup = new FormGroup({
    banking_account_arr: new FormArray([ 
      new FormGroup({
        account_type: new FormControl('', Validators.required),
        bank_name: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
        current_balance: new FormControl('', Validators.required),
      })
    ])
  });
  bankAddressForm: FormGroup = new FormGroup({
    bank_name: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
  });
  accountInfoForm: FormGroup = new FormGroup({});
  currentBalanceForm: FormGroup = new FormGroup({
    current_balance: new FormControl('', Validators.required),
  });
  investmentAccountsForm: FormGroup = new FormGroup({
    check_investment_accounts: new FormControl('', Validators.required),
  });
  typeOfInvestmentForm: FormGroup = new FormGroup({
    type_of_investment_arr: new FormArray([ 
      new FormGroup({
        financial_interest: new FormControl('', Validators.required),
        name_of_institution: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
        investment_phone_no: new FormControl('', Validators.required),
        current_value: new FormControl('', Validators.required),
        loan_value: new FormControl('', Validators.required),
      })
    ])
  });
  haveAnyCreditCardForm: FormGroup = new FormGroup({
    have_any_credit_card: new FormControl('', Validators.required),
  });
  addCardDetailsForm: FormGroup = new FormGroup({
    card_details_arr: new FormArray([ 
      new FormGroup({
        card_name: new FormControl('', Validators.required),
        total_credit: new FormControl('', Validators.required),
        amount_owed: new FormControl('', Validators.required),
        available_credit: new FormControl('', Validators.required),
        full_name: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
      })
    ])
  });
  wholeLifeInsuranceForm: FormGroup = new FormGroup({
    whole_life_insurance: new FormControl('', Validators.required),
  });
  addressInsuranceCompanyForm: FormGroup = new FormGroup({
    address_insurance_company_arr: new FormArray([ 
      new FormGroup({
        insurance_company_name: new FormControl('', Validators.required),
        insurance_company_address: new FormControl('', Validators.required),
        policy_number: new FormControl('', Validators.required),
        policy_owner: new FormControl('', Validators.required),
        cash_value: new FormControl('', Validators.required),
        outstanding_loan_balance: new FormControl('', Validators.required),
      })
    ])
  });
  propertyDetailsForm: FormGroup = new FormGroup({
    property_details: new FormControl('', Validators.required),
  });
  propertyDetailsStepForm: FormGroup = new FormGroup({
    property_details_step_arr: new FormArray([ 
      new FormGroup({
        property_address: new FormControl('', Validators.required),
        purchase_date: new FormControl('', Validators.required),
        fair_market_value: new FormControl('', Validators.required),
        loan_balance: new FormControl('', Validators.required),
        monthly_payment: new FormControl('', Validators.required),
        final_payment_date: new FormControl('', Validators.required),
        property_description: new FormControl('', Validators.required),
      })
    ])
  });
  questions: any[];
  curStep="owe";
  curStepProgress=0;
  formId;
  userId;
  steps;
  years;
  @ViewChild('template', {static: true}) template: any;

  modalRef: BsModalRef;
  constructor(
    private cdr: ChangeDetectorRef,
    private questionService: QuestionsService,
    private modalService: BsModalService,
    private formsService: FormsService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.questions = [];
    this.steps=[];
    this.years = [];
    const curYear = (new Date()).getFullYear();
    for (let year = curYear; year >=2000 ; year--) {
      this.years.push(year);      
    }
  }

  ngOnInit() {
    this.initData();
  }
  addAnotherPropertyDetailsStep(){    
    this.propertyDetailsStepForm.controls.property_details_step_arr.push(
      new FormGroup({
        property_address: new FormControl('', Validators.required),
        purchase_date: new FormControl('', Validators.required),
        fair_market_value: new FormControl('', Validators.required),
        loan_balance: new FormControl('', Validators.required),
        monthly_payment: new FormControl('', Validators.required),
        final_payment_date: new FormControl('', Validators.required),
        property_description: new FormControl('', Validators.required),
      }))
  }
  addAnotherAddressInsuranceCompany() {
    this.addressInsuranceCompanyForm.controls.address_insurance_company_arr.push(
      new FormGroup({
        insurance_company_name: new FormControl('', Validators.required),
        insurance_company_address: new FormControl('', Validators.required),
        policy_number: new FormControl('', Validators.required),
        policy_owner: new FormControl('', Validators.required),
        cash_value: new FormControl('', Validators.required),
        outstanding_loan_balance: new FormControl('', Validators.required),
      }))
  }
  addAnotherCardDetails() {
    this.addCardDetailsForm.controls.card_details_arr.push(
      new FormGroup({
        card_name: new FormControl('', Validators.required),
        total_credit: new FormControl('', Validators.required),
        amount_owed: new FormControl('', Validators.required),
        available_credit: new FormControl('', Validators.required),
        full_name: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
      }))
  }
  addAnotherInvestment() {
    this.typeOfInvestmentForm.controls.type_of_investment_arr.push(
      new FormGroup({
        financial_interest: new FormControl('', Validators.required),
        name_of_institution: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
        investment_phone_no: new FormControl('', Validators.required),
        current_value: new FormControl('', Validators.required),
        loan_value: new FormControl('', Validators.required),
      }))
  }
  addAnotherPolicy() {
    this.policyDetailsForm.controls.policy_details.push(
      new FormGroup({
        policy_name: new FormControl('', Validators.required),
        amount_receive: new FormControl('', Validators.required),
        receive_date: new FormControl('', Validators.required),
      }))
  }
  addAnotherBankingAccount() {
    this.bankingAccountForm.controls.banking_account_arr.push(
      new FormGroup({
        account_type: new FormControl('', Validators.required),
        bank_name: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
        current_balance: new FormControl('', Validators.required),
      }))
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

  initData() {
    this.activatedRoute.params.subscribe(params => {
      this.formId = params.id;
      this.formsService.getFormById(this.formId).subscribe((form:any) => {
        this.userId = form.data.user_id;
        const step = form.data.last_slug;
        
        this.questionService.getAllQuestions().subscribe(data => {
          this.questions = data.data.questions;
          this.steps = this.questions.map((it: any) => (it.step))
          this.cdr.markForCheck();
          this.moveStep(step) ;
        })
      })
    })
  }
  private getQIdByStep(step) {
    return this.questions[this.questions.findIndex((it: any) => it.step === step)].id;
  }
  curStepTitle(step) {
    return this.questions[this.questions.findIndex((it: any) => it.step === step)].title;
  }
  addAnswer(formName, formValue) {
    let qid =this.questions.find(it => it.step === this.curStep).id;
    
    console.log(formValue);
    if(formValue.invalid) {
      this.toastr.warning('You should input/select answer.', 'Warning');
      return;
    }
    this.formsService.addQA(qid, this.formId, this.curStep, formValue.value).subscribe((data: any) => {
      console.log(data);
      if(data.status =="success") {
        this.toastr.success(data.message, 'Success');
        this.moveNextStep(this.curStep);
      } else {
        this.toastr.error(data.message, 'Error');
      }
    });
  }

  getPrevious(curStep) {
    let index = this.steps.indexOf(curStep);
    if(index>0)
      this.moveStep(this.steps[index-1]);
  }
  moveNextStep(curStep) {
    let index = this.steps.indexOf(curStep);
    this.moveStep(this.steps[index+1]);
  }
  skipThisStep(curStep) {
    curStep = curStep.replace('-container', '');
    this.curStep = this.steps[this.steps.indexOf(curStep)+1];
    this.curStepProgress = this.steps.indexOf(curStep) + 2;
    this.cdr.markForCheck();
  }
  skipSection(nextStep, curStep) {
    nextStep = nextStep.replace('-container', '');
    let index = this.steps.indexOf(nextStep)
    this.moveStep(this.steps[index]);
  }

  moveStep(step) {
    step = step.replace('-container', '');
    console.log(step);
    this.formsService.getAnswer(this.formId, this.getQIdByStep(step)).subscribe((data:any)=> {
      console.log(data);
      const formName = step+'Form';
      if(data && data.data){
        console.log(this[formName]);
        if(step === 'policyDetails'){
          for(let i=0; i<data.data.answer.policy_details.length-1;i++){
            this.addAnotherPolicy();
          }
        } else if(step === 'bankingAccount'){
          for(let i=0; i<data.data.answer.banking_account_arr.length-1;i++){
            this.addAnotherBankingAccount();
          }
        } else if(step === 'typeOfInvestment'){
          for(let i=0; i<data.data.answer.type_of_investment_arr.length-1;i++){
            this.addAnotherInvestment();
          }
        } else if(step === 'addCardDetails'){
          for(let i=0; i<data.data.answer.card_details_arr.length-1;i++){
            this.addAnotherCardDetails();
          }
        } else if(step === 'addressInsuranceCompany'){
          for(let i=0; i<data.data.answer.policy_details.length-1;i++){
            this.addAnotherAddressInsuranceCompany();
          }
        } else if(step === 'policyDetails'){
          for(let i=0; i<data.data.answer.address_insurance_company_arr.length-1;i++){
            this.addAnotherPolicy();
          }
        } else if(step === 'policyDetails'){
          for(let i=0; i<data.data.answer.policy_details.length-1;i++){
            this.addAnotherPolicy();
          }
        }
        this[formName].setValue({...data.data.answer});
      } else {
        this[formName].reset();
      }
      this.curStep = step;
      this.curStepProgress = this.steps.indexOf(step) + 1;
      this.cdr.markForCheck();
    })
  }
}
