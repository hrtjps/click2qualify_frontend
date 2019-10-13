export function scrollToTop(scrollDuration: number) {
  const cosParameter = window.scrollY / 2;
  let scrollCount = 0;
  let oldTimestamp = performance.now();
  function step(newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) { window.scrollTo(0, 0); }
    if (window.scrollY === 0) { return; }
    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}


/* tslint:disable */
export function toggleFullscreen() {
  if (!document.fullscreenElement             /* Standard browsers */
    && !document['msFullscreenElement']       /* Internet Explorer */
    && !document['mozFullScreenElement']      /* Firefox */
    && !document['webkitFullscreenElement']   /* Chrome */          
  ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement['msRequestFullscreen']) {
      document.documentElement['msRequestFullscreen']();
    } else if (document.documentElement['mozRequestFullScreen']) {
      document.documentElement['mozRequestFullScreen']();
    } else if (document.documentElement['webkitRequestFullscreen']) {
      document.documentElement['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document['msExitFullscreen']) {
      document['msExitFullscreen']();
    } else if (document['mozCancelFullScreen']) {
      document['mozCancelFullScreen']();
    } else if (document['webkitExitFullscreen']) {
      document['webkitExitFullscreen']();
    }
  }
}
/* tslint:enable */


// conditionaly apply css class to target
export function handleClassCondition(
  condition: boolean,
  className: string,
  el: HTMLElement
) {
  if (!condition && el.classList.contains(className)) {
    el.classList.remove(className);
  }
  if (condition && !el.classList.contains(className)) {
    el.classList.add(className);
  }
}
