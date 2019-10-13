import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnOffComponent } from './on-off/on-off.component';

@NgModule({
  declarations: [OnOffComponent],
  imports: [
    CommonModule
  ],
  exports: [OnOffComponent]
})
export class UiModule { }
