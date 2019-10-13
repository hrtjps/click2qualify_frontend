import { Action, createReducer, on } from '@ngrx/store';
import * as NavigationActions from './navigation.actions';
import { NavigationItems } from '../../app.navigation';

export interface NavigationItem {
  title: string;
  icon?: string;
  tags?: string;
  routerLink?: string;
  active?: boolean;
  open?: boolean;
  items?: NavigationItem[];
  matched?: boolean;
  navTitle?: boolean;

}

export interface NavigationState {
  items: NavigationItem[];
  total: number;
  filterActive: boolean;
  filterText: string;
  matched: number;
}

export const initialState: NavigationState = {
  items: decorateItems(NavigationItems),
  total: countTotal(NavigationItems),
  filterActive: false,
  filterText: '',
  matched: 0
};


const navigationReducer = createReducer(
  initialState,
  on(NavigationActions.activeUrl, (state, action) => ({
    ...state,
    items: detectActiveItems(state.items, action.url)
  })),
  on(NavigationActions.toggleNavSection, (state, action) => ({
    ...state,
    items: toggleItems(state.items, action.item)
  })),
  on(NavigationActions.toggleFilter, state => {
    if (state.filterActive) {
      return {
        ...state,
        filterActive: false,
        matched: 0,
        items: state.items.map(_ => ({ ..._, matched: null }))
      };
    } else {
      const items = filterItems(state.items, state.filterText);
      return {
        ...state,
        filterActive: true,
        items,
        matched: countMatched(items),
      };
    }

  }),
  on(NavigationActions.navigationFilter, (state, action) => {
    const items = filterItems(state.items, action.text);
    return {
      ...state,
      filterText: action.text,
      items,
      matched: countMatched(items),
    };
  })
);


export function reducer(state: NavigationState, action: Action) {
  return navigationReducer(state, action);
}



// utils

// recursevly add `open` and `active` fields to items
function decorateItems(navItems: NavigationItem[]): NavigationItem[] {
  return navItems.map(navItem => {
    const item: NavigationItem = {
      ...navItem,
      active: false,
      matched: null
    };
    if (navItem.items) {
      item.open = false;
      item.items = decorateItems(navItem.items);
    }

    item.navTitle = !navItem.items && !navItem.routerLink && !!navItem.title;

    return item;
  });
}

// recursevly count total of all items
function countTotal(navItems: NavigationItem[]): number {
  let total = navItems.length;
  navItems.filter(_ => !!_.items).forEach(_ => {
    total += countTotal(_.items);
  });
  return total;
}

// recursevly count total of filter matched items
function countMatched(navItems: NavigationItem[]): number {
  let matched = navItems.filter(_ => !!_.matched).length;
  navItems.filter(_ => !!_.items).forEach(_ => {
    matched += countMatched(_.items);
  });
  return matched;
}


// recursevly check if item is active by url when navigation ends
// if active item has parent it's `open` field becomes true
function detectActiveItems(navItems: NavigationItem[], activeUrl: string): NavigationItem[] {
  return navItems.map(navItem => {
    const isActive = itemIsActive(navItem, activeUrl);
    const item = {
      ...navItem,
      active: isActive
    };
    if (navItem.items) {
      item.open = isActive;
      item.items = detectActiveItems(navItem.items, activeUrl);
    }
    return item;
  });
}


// recursevly check if item is active by url
// if any of item children is active item considered as active
function itemIsActive(item: NavigationItem, activeUrl: string) {
  if (item.routerLink === activeUrl) {
    return true;
  } else if (item.items) {
    return item.items.some(_ => itemIsActive(_, activeUrl));
  } else {
    return false;
  }
}



function toggleItems(navItems: NavigationItem[], toggledItem: NavigationItem): NavigationItem[] {

  const isToggledItemLevel = navItems.some(_ => _ === toggledItem);
  return navItems.map(navItem => {

    const item = {
      ...navItem
    };

    if (isToggledItemLevel && item.items && navItem !== toggledItem) {
      item.open = false;
    }
    if (navItem === toggledItem) {
      item.open = !navItem.open;
    }
    if (navItem.items) {
      item.items = toggleItems(navItem.items, toggledItem);
    }
    return item;
  });
}


function filterItems(navItems: NavigationItem[], text: string): NavigationItem[] {

  return navItems.map(navItem => {

    const item = {
      ...navItem,
    };

    if (navItem.items) {
      item.matched = navItemMatch(navItem, text) || navItem.items.some(_ => navItemMatch(_, text));
      item.items = filterItems(navItem.items, text);
    } else {
      item.matched = navItemMatch(navItem, text);
    }
    return item;
  });
}

function navItemMatch(item: NavigationItem, text: string) {
  return (!text.trim() || (item.tags && !!item.tags.match(new RegExp(`.*${text.trim()}.*`, 'gi'))));

}
