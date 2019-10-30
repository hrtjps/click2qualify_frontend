import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';

import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';

import { allCountries } from 'country-telephone-data';

@Component({
  selector: 'smart-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  loading = false;
  stripeInfoForm: FormGroup;
  isSubmitted = false;
  user;

  showCountry: boolean = false
  countryCodes: any[] = allCountries
  selectedCountry: string = '1'
  

  elements: Elements;
  card: StripeElement;
  stripeErrMsg ='';
 
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    public fvs: FormValidationService,
    private toastrService: ToastrService,
    private commonService: CommonService,
    private authService: AuthService,
    private paymentService: PaymentService,
    private stripeService: StripeService,
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    

    this.stripeInfoForm = this.fb.group({
      amount: new FormControl(0, Validators.required),
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      phone: new FormControl(this.user.phone),
    });

    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#495057',
                color: '#495057',
                lineHeight: '1.47',
                fontWeight: 400,
                // fontFamily: 'Poppins, "Helvetica Neue", Helvetica, Arial;',
                fontSize: '13px',
                '::placeholder': {
                  color: 'rgb(142, 147, 150)'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  toggleDropdown() {
    this.showCountry = !this.showCountry
  }
  
  payWithStripe(){
    this.isSubmitted = true;
    if (!this.stripeInfoForm.valid) {
      return;
    }
    this.loading = true;
    const data = this.stripeInfoForm.value;
    this.stripeErrMsg = '';
    this.stripeService
      .createToken(this.card, { ...data })
      .subscribe(result => {
        if (result.token) {
          let token = {
            ...result.token,
            ...data
          };
          console.log(token);
          this.paymentService.payWithStripe(token).subscribe((rtVal: any) => {
            console.log(rtVal);
            if(rtVal.error){
              this.toastrService.error(this.commonService.convertReqErr2String(rtVal.error.error), 'Error');
            } else {
              this.toastrService.success('Successfully paid!', 'Alert');
            }
          })
        } else if (result.error) {
          this.stripeErrMsg = result.error.message;
        }
        this.cdr.markForCheck();
      });

  }
  payWithPlaid() {

  }
}
