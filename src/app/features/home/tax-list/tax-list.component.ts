import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'smart-tax-list',
  templateUrl: './tax-list.component.html',
  styleUrls: ['./tax-list.component.scss']
})
export class TaxListComponent implements OnInit {

  tableList;
  
  columns = [
    {name: 'user', title: 'User Name'},
    {name: 'email', title: 'User Email'},
    {name: 'last_slug', title: 'Form Last Slug'},
    {name: 'created', title: 'Created'},
    {name: 'updated', title: 'Last Updated'},
  ];
  
  dropDownMenu = [
    {
      name: 'start',
      label: 'Start'
    },
    {
      name: 'continue',
      label: 'Continue'
    },
    {
      name: 'edit',
      label: 'Edit'
    },
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
    const user = this.authService.currentUserValue;
    this.formsService.getUserAllTaxForms(user.id).subscribe(data => {
      this.tableList = data.data.forms;
      this.cdr.markForCheck();
    })
  }
  buttonClicked($event) {

  }
  newForm() {
    const user = this.authService.currentUserValue;
    this.formsService.newForm(user.id).subscribe((rtVal: any) => {
      console.log(rtVal);
    })

  }
}
