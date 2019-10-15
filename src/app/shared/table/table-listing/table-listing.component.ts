import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Page } from '../page.model';

@Component({
  selector: 'smart-table-listing',
  templateUrl: './table-listing.component.html',
  styleUrls: ['./table-listing.component.scss']
})
export class TableListingComponent implements OnInit {
  @Input() title = '';
  @Input() showDropDownOptions = true;
  @Input() showDeleteButtons = true;
  @Input() columns = [];
  @Input() dropDownMenu = [];
  @Input() clientSideFiltering = true;
  @Input() limit = 10;
  @Input() page = new Page();
  @Input() loading = false;
  @Input() externalSorting = false;
  @Input() externalPaging = false;

  @Input() set data(val: Array<{}>) {
    this.filteredData = val;
    this.allData = val;
  }

  @Output() buttonClicked = new EventEmitter();
  @Output() filterUpdated = new EventEmitter();
  @Output() setPage = new EventEmitter();
  @Output() onSort = new EventEmitter();

  ColumnMode = ColumnMode;
  allData = [];
  filteredData = [];

  constructor() {
  }

  ngOnInit() {

  }

  buttonClickedFn(btn, data, domRef?) {
    this.buttonClicked.emit({
      btn,
      data
    });

    if (domRef) {
      domRef.hide();
    }

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    if (this.clientSideFiltering) {
      this.filteredData = this.allData.filter((d) => {
        return JSON.stringify(Object.values(d)).toLowerCase().indexOf(val) !== -1 || !val;
      });
    } else {
      this.filterUpdated.emit(val);
    }
  }

  setPageFn(event) {
    this.setPage.emit(event);
  }

  onSortFn(event) {
    this.onSort.emit(event);
  }

}
