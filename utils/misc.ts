/*
export const commify = (num: number): string => {
  num -= 0;
  if (num === 0) {
    return num + '';
  }

  const ret = [];
  let count = 0
  while (num > 0) {
    if (count > 0 && count % 3 == 0) {
      ret.push(',');
    }
    ret.push((num % 10) + '');
    num = Math.floor(num / 10);
    count++;
  }
  ret.reverse();
  return ret.join('');
};
 */

/*
 * the same as in animation counter
 */
export const commify = (x) => {
  x = x == null ? '' : x;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const judgeDeviceType = () => {
  /*
   * 1: SP portrait
   * 2: Tablet Portrait & large SP landscape
   * 3: Normal Desktop & Tablet landscape
   * 4: Large Desktop
   * cf.) ../styles/global.css
   */
  if (typeof window === "undefined" || !window.matchMedia) {
    return -1;
  }
  if (window.matchMedia('(max-width: 576px)').matches) {
    return 1;
  } else if (window.matchMedia('(max-width: 768px)').matches) {
    return 2;
  } else if (window.matchMedia('(max-width: 1200px)').matches) {
    return 3;
  } else {
    return 4;
  }
};
export const isSP = () => {
  const deviceType = judgeDeviceType();
  return 0 <= deviceType && deviceType <= 2;
};
export const isPortrait = () => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia('(orientation: portrait)').matches;
};
export const isSPView = () => {
  return isSP() && isPortrait();
};


const _isFrontEnd = () => {
  return (typeof window !== 'undefined' &&
          typeof document !== "undefined" && document.documentElement);
};
export const getCSSVariable = (key: string) => {
  if (!_isFrontEnd()) return null;
  return window.getComputedStyle(document.body).getPropertyValue(key);
};
export const vh = (v: float) => {
  if (!_isFrontEnd()) return null;
  const h = Math.max(document.documentElement.clientHeight,
                     window.innerHeight || 0);
  return (v * h) / 100;
};
export const vw = (v: float) => {
  if (!_isFrontEnd()) return null;
  const w = Math.max(document.documentElement.clientWidth,
                     window.innerWidth || 0);
  return (v * w) / 100;
};



//// Element to move, time in ms to animate
//export const smoothScroll = (element, duration) => {
//    var e = document.documentElement;
//    if(e.scrollTop===0){
//        var t = e.scrollTop;
//        ++e.scrollTop;
//        e = t+1===e.scrollTop--?e:document.body;
//    }
//    _scrollToC(e, e.scrollTop, element, duration);
//}
//
//// Element to move, element or px from, element or px to, time in ms to animate
//function _scrollToC(element, from, to, duration) {
//    if (duration <= 0) return;
//    if(typeof from === "object")from=from.offsetTop;
//    if(typeof to === "object")to=to.offsetTop;
//
//    _scrollToX(element, from, to, 0, 1/duration, 20, _easeOutCubic);
//}
//
//function _scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
//    if (t01 < 0 || t01 > 1 || speed<= 0) {
//        element.scrollTop = xTo;
//        return;
//    }
//    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
//    t01 += speed * step;
//
//    setTimeout(function() {
//        _scrollToX(element, xFrom, xTo, t01, speed, step, motion);
//    }, step);
//}
//function _easeOutCubic(t){
//    t--;
//    return t*t*t+1;
//}
//
