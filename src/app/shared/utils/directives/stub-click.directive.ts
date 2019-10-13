import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[smartStubClick]'
})
export class StubClickDirective {

  @HostListener('click', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
  }
}
