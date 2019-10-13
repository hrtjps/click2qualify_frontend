import { ActionReducer, Action, INIT } from '@ngrx/store';

import * as actions from './settings.actions';
import { SettingsState } from './settings.reducer';
import { handleClassCondition } from '../../shared/utils/utils.functions';

const html = document.querySelector('html');
const body = document.querySelector('body');

// meta reducer that applies layout classes based on settings reducer
export function settingsMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: { settings: SettingsState }, action: Action) => {

    // build new state
    const result = reducer(state, action);

    // use our middleware only for INIT action and for Settings actions
    if (action.type === INIT || actions.SettingsActionTypes.includes(action.type)) {
      handleCssClasses(result.settings, action);
    }

    // pass state into next chain
    return result;
  };
}


function handleCssClasses(state: SettingsState, action: Action) {
  handleClassCondition(state.fixedHeader, 'header-function-fixed', body);
  handleClassCondition(state.fixedNavigation, 'nav-function-fixed', body);
  handleClassCondition(state.minifyNavigation, 'nav-function-minify', body);
  handleClassCondition(state.hideNavigation, 'nav-function-hidden', body);
  handleClassCondition(state.topNavigation, 'nav-function-top', body);
  handleClassCondition(state.boxedLayout, 'mod-main-boxed', body);
  handleClassCondition(state.pushContent, 'nav-mobile-push', body);
  handleClassCondition(state.noOverlay, 'nav-mobile-no-overlay', body);
  handleClassCondition(state.offCanvas, 'nav-mobile-slide-out', body);
  handleClassCondition(state.biggerContentFont, 'mod-bigger-font', body);
  handleClassCondition(state.highContrastText, 'mod-high-contrast', body);
  handleClassCondition(state.daltonism, 'mod-color-blind', body);
  handleClassCondition(state.preloaderInside, 'mod-pace-custom', body);
  handleClassCondition(state.cleanPageBackground, 'mod-clean-page-bg', body);
  handleClassCondition(state.hideNavigationIcons, 'mod-hide-nav-icons', body);
  handleClassCondition(state.disableCSSAnimation, 'mod-disable-animation', body);
  handleClassCondition(state.hideInfoCard, 'mod-hide-info-card', body);
  handleClassCondition(state.leanSubheader, 'mod-lean-subheader', body);
  handleClassCondition(state.hierarchicalNavigation, 'mod-nav-link', body);
  handleClassCondition(state.globalFontSize === 'sm', 'root-text-sm', html);
  handleClassCondition(state.globalFontSize === 'md', 'root-text', html);
  handleClassCondition(state.globalFontSize === 'lg', 'root-text-lg', html);
  handleClassCondition(state.globalFontSize === 'xl', 'root-text-xl', html);
}


