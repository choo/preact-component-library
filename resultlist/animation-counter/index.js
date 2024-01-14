import { useState, useEffect } from 'react';

const commify = (x) => {
  x = x == null ? '' : x;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * props:
 *    target   : (required) Target Value to render 
 *    duration : (optional) 300 (ms)
 *    interval : (optional) 20 (ms)
 *    style : (optional) style settings
 *    initial  : (optional) initial number (Set to 0 if animation should
 *        run when the page is opened.)
 */
const AnimationCounter = props => {
  const [value, setValue] = useState(props.initial ?? props.target);
  const [prev, setPrev] = useState(props.initial ?? props.target);
  const [target, setTarget] = useState(props.target);
  const duration = props.duration || 300; // ms
  const interval = props.interval || 20; // ms

  useEffect(() => {
    setTarget(props.target);
  }, [props.target]);

  useEffect(() => {
    const isUp = prev <= props.target;
    const diff = Math.abs(props.target - prev);
    const numSteps = Math.ceil(duration / interval);
    const step = Math.max(1, Math.ceil(diff / numSteps));
    const delta = isUp ? step : -step;

    const timer = setInterval(() => {
      const next = value + delta;
      if (isUp && next < target || !isUp && next > target) {
        setValue(next);
      } else {
        // completed update
        setValue(target);
        setPrev(target);
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  });

  return (
    <span style={{...props.style}}>
      {commify(value)}
    </span>
  );
};

export default AnimationCounter;
