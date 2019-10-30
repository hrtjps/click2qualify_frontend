import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'smart-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.scss']
})
export class TaxFormComponent implements OnInit {
  @ViewChild('taxForm', {static: true}) taxForm: any;

  allAnswer: any[];
  user;
  taxId;

	total_gross_monthly_wages_and_salaries = 0;
	total_spouses_wages = 0;
	total_earn_any_interest = 0;
	total_net_business_income = 0;
	total_net_rental_income = 0;
	total_distribution_amount = 0;
	total_pension_amount = 0;
	total_spouse_pension_amount = 0;
	total_social_security_amount = 0;
	total_child_support_amount = 0;
	total_spouse_social_security_amount = 0;
	total_alimony_amount = 0;
	total_living_expenses = 0;
  total_income = 0;
  total_personal_asset=0;
  total_card_details=0;
  
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private formsService: FormsService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.allAnswer = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.user = this.authService.currentUserValue;
    this.activatedRoute.params.subscribe(params => {
      this.taxId = params.id;
      this.formsService.getAllAnswer(this.taxId).subscribe((rtVal:any) => {
        
        this.allAnswer = rtVal.data;
        // console.log(this.allAnswer);
        this.cdr.markForCheck();
        this.countTotalValues();
      })
    })
  }
  getAnswer(qId) {
    const pos=this.allAnswer.findIndex((it:any) => it.question_id == qId);
    if(pos<0)return new Object();
    this.cdr.markForCheck();
    return this.allAnswer[pos].answer;
  }
  getABCode(i) {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'][i];
  }
  countTotalValues() {
    let income_step_arr = this.getAnswer(89).continue_answering_month_income_step_arr;
    this.total_gross_monthly_wages_and_salaries = 0;
    this.total_spouses_wages = 0;
    this.total_earn_any_interest = 0;
    this.total_net_business_income = 0;
    this.total_net_rental_income = 0;
    this.total_distribution_amount = 0;
    this.total_pension_amount = 0;
    this.total_spouse_pension_amount = 0;
    this.total_social_security_amount = 0;
    this.total_child_support_amount = 0;
    this.total_spouse_social_security_amount = 0;
    this.total_alimony_amount = 0;
    this.total_living_expenses = 0;
    this.total_income = 0;
    if(income_step_arr){
      income_step_arr.forEach(element => {
        this.total_gross_monthly_wages_and_salaries += element.gross_monthly_wages_and_salaries || 0;
        this.total_spouses_wages += element.spouses_wages || 0;
        this.total_earn_any_interest += element.earn_any_interest || 0;
        this.total_net_business_income += element.net_business_income || 0;
        this.total_net_rental_income += element.net_rental_income || 0;
        this.total_distribution_amount += element.distribution_amount || 0;
        this.total_pension_amount += element.pension_amount || 0;
        this.total_spouse_pension_amount += element.spouse_pension_amount || 0;
        this.total_social_security_amount += element.social_security_amount || 0;
        this.total_child_support_amount += element.child_support_amount || 0;
        this.total_spouse_social_security_amount += element.spouse_social_security_amount || 0;
        this.total_alimony_amount += element.alimony_amount || 0;
        this.total_living_expenses += element.living_expenses || 0;
        this.total_income += element.income || 0;
      });
    }

    let personal_asset_step_arr = this.getAnswer(86).personal_asset_step_arr
    this.total_personal_asset=0;
    if(personal_asset_step_arr) {
      personal_asset_step_arr.forEach(element => {
        this.total_personal_asset += (element.fair_market_value - element.loan_balance)
      });
    }

    let card_details_arr = this.getAnswer(71).personal_asset_step_arr
    this.total_card_details=0;
    if(card_details_arr) {
      card_details_arr.forEach(element => {
        this.total_card_details += (element.available_credit)
      });
    }
  }
  

  printTaxForm() {
    // console.log(this.taxForm);
    window.print();
    // const win = window.open('', '');
    // // win.document.write('<html><head><title>INVOICE</title>'
    // //             +'</head><body></body></html>');
    // win.document.body.innerHTML = this.taxForm.nativeElement.innerHTML;

    // if (navigator.userAgent.match(/Trident\/\d.\d/)) { // IE needs to call this without a setTimeout
    //   win.print();
    //   // win.close();
    // } else {
    //   setTimeout(() => {
    //     win.print();
    //     // win.close();
    //   }, 0);
    // }

  }
}
