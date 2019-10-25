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
  columns = [
    {name: 'user', title: 'User Name'},
    {name: 'email', title: 'User Email'},
    {name: 'last_slug', title: 'Form Last Slug'},
    {name: 'created', title: 'Created'},
    {name: 'updated', title: 'Last Updated'},
  ];
  
  dropDownMenu = [
    {
      name: 'print',
      label: 'Print'
    },
    {
      name: 'download',
      label: 'Download'
    },
  ];
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
      this.cdr.markForCheck();
    })
  }
  buttonClicked($event) {
    console.log($event);
  }
}
