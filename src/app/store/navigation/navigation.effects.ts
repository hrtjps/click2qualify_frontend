import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { activeUrl, mobileNavigation } from './navigation.actions';
import { handleClassCondition } from 'src/app/shared/utils/utils.functions';

@Injectable()
export class NavigationEffects {

  mapToActiveUrl$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map((action: RouterNavigatedAction) => activeUrl({ url: action.payload.event.url })),
    tap(action => handleClassCondition(false, 'mobile-nav-on', document.querySelector('body')))
  ));

  mobileNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(mobileNavigation),
    tap(action => handleClassCondition(action.open, 'mobile-nav-on', document.querySelector('body'))
  )), { dispatch: false });

  constructor(private actions$: Actions, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(
      '(max-width: 600px)',
    ).subscribe(result => {
      handleClassCondition(result.matches, 'mobile-view-activated', document.querySelector('body'));
    });
  }
}



