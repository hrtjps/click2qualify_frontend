import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, ChangeDetectionStrategy, HostBinding } from '@angular/core';


@Component({
  selector: 'smart-on-off',
  template: `
  <a
    href="#"
    (click)="onCheck($event)"
    class="btn btn-switch {{class}}"
    [class.active]="checked"></a>
  `,
  host: {
    class: 'd-inline-block'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnOffComponent implements OnChanges {

  @Input() checked = false;
  @Input() class: string;
  @Output() checkedChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.checked || changes.checked.currentValue === this.checked) { return; }
  }

  onCheck($event: MouseEvent) {
    $event.preventDefault();
    this.checked = !this.checked;

    this.checkedChange.emit(this.checked);
  }
}
