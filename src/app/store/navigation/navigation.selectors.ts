import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NavigationState } from './navigation.reducer';

export const selectNavigationState = createFeatureSelector<NavigationState>('navigation');

export const selectNavigationItems = createSelector(selectNavigationState, state => state.items);
export const selectFilter = createSelector(selectNavigationState, state => ({
  active: state.filterActive,
  text: state.filterText
}));


export const selectResult = createSelector(selectNavigationState, state => ({
  active: state.filterActive && !!state.filterText.trim(),
  total: state.total,
  matched: state.matched
}));
