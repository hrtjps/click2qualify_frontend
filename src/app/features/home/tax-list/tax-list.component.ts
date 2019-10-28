import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router,
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
    console.log($event);
    if($event.btn=="start") {
      this.router.navigate(["/user-tax-qa", $event.data._id]);
    } else if($event.btn=="continue") {
      this.router.navigate(["/user-tax-qa", $event.data._id]);
    } else if($event.btn=="edit") {
      this.router.navigate(["/user-tax-qa", $event.data._id]);
    } else if($event.btn=="print") {
      this.router.navigate(["/user-tax-qa", $event.data._id]);
    } else if($event.btn=="download") {
      this.router.navigate(["/user-tax-qa", $event.data._id]);
    } else {

    }
  }
  newForm() {
    const user = this.authService.currentUserValue;
    this.formsService.newForm(user.id).subscribe((rtVal: any) => {
      console.log(rtVal);
      this.router.navigate(["/user-tax-qa", rtVal.data._id]);
    })

  }
}
