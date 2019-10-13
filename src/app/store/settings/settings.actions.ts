import { createAction, props } from '@ngrx/store';


export const toggleFixedHeader = createAction(
  '[Settings] Toggle Fixed Header'
);
export const toggleFixedNavigation = createAction(
  '[Settings] Toggle Fixed Navigation'
);
export const toggleMinifyNavigation = createAction(
  '[Settings] Toggle Minify Navigation'
);
export const toggleHideNavigation = createAction(
  '[Settings] Toggle Hide Navigation'
);
export const toggleTopNavigation = createAction(
  '[Settings] Toggle Top Navigation'
);
export const toggleBoxedLayout = createAction(
  '[Settings] Toggle Boxed Layout'
);
export const togglePushContent = createAction(
  '[Settings] Toggle Push Content'
);
export const toggleNoOverlay = createAction(
  '[Settings] Toggle No Overlay'
);
export const toggleOffCanvas = createAction(
  '[Settings] Toggle Off Canvas'
);
export const toggleBiggerContentFont = createAction(
  '[Settings] Toggle Bigger Content Font'
);
export const toggleHighContrastText = createAction(
  '[Settings] Toggle High Contrast Text'
);
export const toggleDaltonism = createAction(
  '[Settings] Toggle Daltonism'
);
export const toggleRtl = createAction(
  '[Settings] Toggle RTL'
);
export const togglePreloaderInsise = createAction(
  '[Settings] Toggle Preloader Insise'
);
export const toggleCleanPageBackground = createAction(
  '[Settings] Toggle Clean Page Background'
);
export const toggleHideNavigationIcons = createAction(
  '[Settings] Toggle Hide Navigation Icons'
);
export const toggleDisableCSSAnimation = createAction(
  '[Settings] Toggle Disable CSS Animation'
);
export const toggleHideInfoCard = createAction(
  '[Settings] Toggle Hide Info Card'
);
export const toggleLeanSubheader = createAction(
  '[Settings] Toggle Lean Subheader'
);
export const toggleHierarchicalNavigation = createAction(
  '[Settings] Toggle Hierarchical Navigation'
);
export const setGlobalFontSize = createAction(
  '[Settings] Set Global Font Size',
  props<{ size: string; }>()
);
export const appReset = createAction(
  '[Settings] App Reset'
);
export const factoryReset = createAction(
  '[Settings] Factory Reset'
);


export const SettingsActionTypes: string[] = [
  toggleFixedHeader.type,
  toggleFixedNavigation.type,
  toggleMinifyNavigation.type,
  toggleHideNavigation.type,
  toggleTopNavigation.type,
  toggleBoxedLayout.type,
  togglePushContent.type,
  toggleNoOverlay.type,
  toggleOffCanvas.type,
  toggleBiggerContentFont.type,
  toggleHighContrastText.type,
  toggleDaltonism.type,
  toggleRtl.type,
  togglePreloaderInsise.type,
  toggleCleanPageBackground.type,
  toggleHideNavigationIcons.type,
  toggleDisableCSSAnimation.type,
  toggleHideInfoCard.type,
  toggleLeanSubheader.type,
  toggleHierarchicalNavigation.type,
  setGlobalFontSize.type,
  appReset.type,
  factoryReset.type,
];
