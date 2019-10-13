import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer, StoreModule
} from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as settings from './settings';
import * as navigation from './navigation';
import * as router from './router';

export interface AppState {
  settings: settings.SettingsState;
  navigation: navigation.NavigationState;
  router: RouterReducerState<router.RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  settings: settings.reducer,
  navigation: navigation.reducer,
  router: router.reducer
};


// this will save part of redux store into localstorage
// and restore this part on app init
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['settings'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [
  localStorageSyncReducer,
  settings.settingsMetaReducer
].concat(
  environment.production ?
    [] : // production only meta reducers
    [] // dev only meta reducers
);


export const effects = [
  navigation.NavigationEffects
];
