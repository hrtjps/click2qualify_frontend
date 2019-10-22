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
    {name: 'last_slug', title: 'Form Title'},
    {name: 'status', title: 'Status'},
  ];
  
  dropDownMenu = [
    {
      name: 'edit',
      label: 'Edit'
    }
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
    this.formsService.getUserAllTaxForms("3").subscribe(data => {
      this.tableList = data.data.forms;
      setTimeout(()=>{
        this.cdr.detectChanges();
      }, 100)
    })
  }
  buttonClicked($event) {
  }
}
