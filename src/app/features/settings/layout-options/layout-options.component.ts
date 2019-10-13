import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsModalService } from 'src/app/shared/layout/settings-modal/settings-modal.service';
import { Store } from '@ngrx/store';
import * as settings from 'src/app/store/settings';

@Component({
  selector: 'smart-layout-options',
  templateUrl: './layout-options.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutOptionsComponent {

  vm$ = this.store.select(settings.selectSettingsState);

  constructor(
    public settingsModal: SettingsModalService,
    private store: Store<any>
  ) { }

  openSettings($event: MouseEvent) {
    $event.preventDefault();
    this.settingsModal.openModal();
  }

  toggleFixedHedaer($event: boolean) {
    this.store.dispatch(settings.toggleFixedHeader());
  }
  toggleFixedNavigation($event: boolean) {
    this.store.dispatch(settings.toggleFixedNavigation());
  }
  toggleMinifyNavigation($event: boolean) {
    this.store.dispatch(settings.toggleMinifyNavigation());
  }
  toggleHideNavigation($event: boolean) {
    this.store.dispatch(settings.toggleHideNavigation());
  }
  toggleTopNavigation($event: boolean) {
    this.store.dispatch(settings.toggleTopNavigation());
  }
  toggleBoxedLayout($event: boolean) {
    this.store.dispatch(settings.toggleBoxedLayout());
  }
  togglePushContent($event: boolean) {
    this.store.dispatch(settings.togglePushContent());
  }
  toggleNoOverlay($event: boolean) {
    this.store.dispatch(settings.toggleNoOverlay());
  }
  toggleOffCanvas($event: boolean) {
    this.store.dispatch(settings.toggleOffCanvas());
  }
  toggleBiggerContentFont($event: boolean) {
    this.store.dispatch(settings.toggleBiggerContentFont());
  }
  toggleHighContrastText($event: boolean) {
    this.store.dispatch(settings.toggleHighContrastText());
  }
  toggleDaltonism($event: boolean) {
    this.store.dispatch(settings.toggleDaltonism());
  }
  togglePreloaderInsise($event: boolean) {
    this.store.dispatch(settings.togglePreloaderInsise());
  }
  toggleCleanPageBackground($event: boolean) {
    this.store.dispatch(settings.toggleCleanPageBackground());
  }
  toggleHideNavigationIcons($event: boolean) {
    this.store.dispatch(settings.toggleHideNavigationIcons());
  }
  toggleDisableCSSAnimation($event: boolean) {
    this.store.dispatch(settings.toggleDisableCSSAnimation());
  }
  toggleHideInfoCard($event: boolean) {
    this.store.dispatch(settings.toggleHideInfoCard());
  }
  toggleLeanSubheader($event: boolean) {
    this.store.dispatch(settings.toggleLeanSubheader());
  }
  toggleHierarchicalNavigation($event: boolean) {
    this.store.dispatch(settings.toggleHierarchicalNavigation());
  }
  setGlobalFontSize(size: string) {
    this.store.dispatch(settings.setGlobalFontSize({ size }));
  }
  appReset($event: MouseEvent) {
    this.store.dispatch(settings.appReset());
  }
  factoryReset($event: MouseEvent) {
    this.store.dispatch(settings.factoryReset());
  }
}
