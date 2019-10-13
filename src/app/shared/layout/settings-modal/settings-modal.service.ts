import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsModalService {

  openSettings$ = new Subject<boolean>();

  public openModal() {
    this.openSettings$.next(true);
  }
}
