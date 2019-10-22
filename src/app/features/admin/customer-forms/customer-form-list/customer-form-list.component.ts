import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'smart-customer-form-list',
  templateUrl: './customer-form-list.component.html',
  styleUrls: ['./customer-form-list.component.scss']
})
export class CustomerFormListComponent implements OnInit {

  tableList;
  countPerPage = 10;
  currentPage = 1;
  filterString = "";
  
  constructor(
    private formsService: FormsService,
    private cdr: ChangeDetectorRef
  ) { 
    this.tableList = [];
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.formsService.getAllTaxForms().subscribe(data => {
      this.tableList = data.data.forms;
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
    })
  }

}
