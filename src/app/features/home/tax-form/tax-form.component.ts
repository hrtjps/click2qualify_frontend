import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'smart-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.scss']
})
export class TaxFormComponent implements OnInit {

  tableList;
  countPerPage = 10;
  currentPage = 1;

  constructor(
    private formsService: FormsService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
  ) { 
    this.tableList = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    // this.formsService.getUserAllTaxForms(this.authService.userId).subscribe(data => {
    this.formsService.getUserAllTaxForms("3").subscribe(data => {
      this.tableList = data.data.forms;
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
    })
  }
}
