import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './router.reducer';

import * as fromRouter from '@ngrx/router-store';

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');
