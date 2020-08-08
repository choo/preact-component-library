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
