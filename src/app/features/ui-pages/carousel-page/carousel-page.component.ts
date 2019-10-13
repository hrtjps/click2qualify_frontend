import { Component, ViewChildren, ElementRef, AfterViewInit, Directive } from '@angular/core';
import * as Holder from 'holderjs';

@Directive({
  selector: '[smartHolderjs]'
})
export class HolderjsDirective {}

@Component({
  selector: 'smart-carousel-page',
  templateUrl: './carousel-page.component.html',
})
export class CarouselPageComponent implements AfterViewInit {

  @ViewChildren(HolderjsDirective, {read: ElementRef}) placeholders: ElementRef[];

  ngAfterViewInit(): void {
    Holder.run({ images: this.placeholders.map(_ => _.nativeElement) });
  }

}
