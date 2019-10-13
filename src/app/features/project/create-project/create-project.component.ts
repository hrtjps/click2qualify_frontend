import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { allCountries } from 'country-telephone-data'

@Component({
  selector: 'smart-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  files: File[] = [];
  isFormSubmitted = false;
  projectModel: any = new Object();
  countryCodes: any[] = allCountries;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    setTimeout(()=>{
      this.cdr.detectChanges();
    }, 30)
    
  }
   
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  createProject(form) {
    if (!form.valid) {
      this.isFormSubmitted = true;
      return;
    }
  }
}
