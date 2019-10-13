import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDef } from '../icon-list/icon-list.component';
import { IconModalService } from '../icon-modal/icon-modal.service';

@Component({
  selector: 'smart-nextgen-base',
  templateUrl: './nextgen-base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextgenBaseComponent implements OnInit {

  nextGenIconList: string[];

  constructor(
    private iconModalService: IconModalService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.nextGenIconList = this.route.snapshot.data.icons.nextGenIconList.reverse()
      .map((icon: string) => ({
        class: icon,
        title: icon
      }));
  }

  onIconClick($event: MouseEvent, icon: IconDef) {
    $event.preventDefault();
    this.iconModalService.openModal(icon);
  }
}
