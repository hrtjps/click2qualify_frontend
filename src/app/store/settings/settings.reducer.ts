import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';

export interface SettingsState {
  // app layout
  fixedHeader: boolean;
  fixedNavigation: boolean;
  minifyNavigation: boolean;
  hideNavigation: boolean;
  topNavigation: boolean;
  boxedLayout: boolean;

  // mobile menu
  pushContent: boolean;
  noOverlay: boolean;
  offCanvas: boolean;

  // accessibility
  biggerContentFont: boolean;
  highContrastText: boolean;
  daltonism: boolean;
  preloaderInside: boolean;
  rtl: boolean;

  // global modifications
  cleanPageBackground: boolean;
  hideNavigationIcons: boolean;
  disableCSSAnimation: boolean;
  hideInfoCard: boolean;
  leanSubheader: boolean;
  hierarchicalNavigation: boolean;

  // global font size
  globalFontSize: string;
}

// here you can configure initial state of your app
// for all your users
export const initialState: SettingsState = {
  // app layout
  fixedHeader: false,
  fixedNavigation: false,
  minifyNavigation: false,
  hideNavigation: false,
  topNavigation: false,
  boxedLayout: false,

  // mobile menu
  pushContent: false,
  noOverlay: false,
  offCanvas: false,

  // accessibility
  biggerContentFont: false,
  highContrastText: false,
  daltonism: false,
  preloaderInside: false,
  rtl: false,

  // global modifications
  cleanPageBackground: false,
  hideNavigationIcons: false,
  disableCSSAnimation: false,
  hideInfoCard: false,
  leanSubheader: false,
  hierarchicalNavigation: false,

  // global font size
  globalFontSize: 'md',

};

const settingsReducer = createReducer(
  initialState,

  on(SettingsActions.toggleFixedHeader, state => ({ ...state, fixedHeader: !state.fixedHeader })),
  on(SettingsActions.toggleFixedNavigation, state => ({...state, fixedNavigation: !state.fixedNavigation })),
  on(SettingsActions.toggleMinifyNavigation, state => ({...state, minifyNavigation: !state.minifyNavigation })),
  on(SettingsActions.toggleHideNavigation, state => ({...state, hideNavigation: !state.hideNavigation })),
  on(SettingsActions.toggleTopNavigation, state => ({...state, topNavigation: !state.topNavigation })),
  on(SettingsActions.toggleBoxedLayout, state => ({...state, boxedLayout: !state.boxedLayout })),
  on(SettingsActions.togglePushContent, state => ({...state, pushContent: !state.pushContent })),
  on(SettingsActions.toggleNoOverlay, state => ({...state, noOverlay: !state.noOverlay })),
  on(SettingsActions.toggleOffCanvas, state => ({...state, offCanvas: !state.offCanvas })),
  on(SettingsActions.toggleBiggerContentFont, state => ({...state, biggerContentFont: !state.biggerContentFont })),
  on(SettingsActions.toggleHighContrastText, state => ({...state, highContrastText: !state.highContrastText })),
  on(SettingsActions.toggleDaltonism, state => ({...state, daltonism: !state.daltonism })),
  on(SettingsActions.toggleRtl, state => ({...state, rtl: !state.rtl })),
  on(SettingsActions.togglePreloaderInsise, state => ({...state, preloaderInside: !state.preloaderInside })),
  on(SettingsActions.toggleCleanPageBackground, state => ({...state, cleanPageBackground: !state.cleanPageBackground })),
  on(SettingsActions.toggleHideNavigationIcons, state => ({...state, hideNavigationIcons: !state.hideNavigationIcons })),
  on(SettingsActions.toggleDisableCSSAnimation, state => ({...state, disableCSSAnimation: !state.disableCSSAnimation })),
  on(SettingsActions.toggleHideInfoCard, state => ({...state, hideInfoCard: !state.hideInfoCard })),
  on(SettingsActions.toggleLeanSubheader, state => ({...state, leanSubheader: !state.leanSubheader })),
  on(SettingsActions.toggleHierarchicalNavigation, state => ({...state, hierarchicalNavigation: !state.hierarchicalNavigation })),
  on(SettingsActions.setGlobalFontSize, (state, action) => ({...state, globalFontSize: action.size })),

  on(SettingsActions.appReset, () => ({...initialState})),


);

export function reducer(state: SettingsState, action: Action) {
  return settingsReducer(state, action);
}
