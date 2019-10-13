import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StubClickDirective } from './directives/stub-click.directive';

@NgModule({
  declarations: [StubClickDirective],
  imports: [
    CommonModule
  ],
  exports: [StubClickDirective]
})
export class UtilsModule { }
