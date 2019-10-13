import { Component, Input, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IconModalService } from '../icon-modal/icon-modal.service';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { debounceTime } from 'rxjs/operators';

export interface IconDef {
  title: string;
  class: string;
}

@Component({
  selector: 'smart-icon-list',
  templateUrl: './icon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconListComponent implements OnInit, OnDestroy {
  @Input() icons: IconDef[];
  filteredIcons: IconDef[];
  typeDebounce$ = new Subject();

  private sub = new SubSink();

  constructor(
    private iconModalService: IconModalService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.filteredIcons = this.icons;
    this.sub.sink = this.typeDebounce$.pipe(
      debounceTime(200)
    ).subscribe((val: string) => {
      if (!val.trim()) {
        this.filteredIcons = this.icons;
      } else {
        this.filteredIcons = this.icons.filter(icon => icon.class.match(new RegExp(`.*${val.trim()}.*`, 'gi')));
      }
      this.changeDetector.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onIconClick($event: MouseEvent, icon: IconDef) {
    $event.preventDefault();
    this.iconModalService.openModal(icon);
  }

  onSearchInput($event: any) {
    this.typeDebounce$.next($event.target.value);
  }

}
