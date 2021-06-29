import { useState, useEffect } from 'preact/hooks';

/**
 * props:
 *    target   : (required) Target Value to render 
 *    duration : (optional) 300 (ms)
 *    interval : (optional) 20 (ms)
 *    style : (optional) style settings
 */
const AnimationCounter = props => {
  const [prev, setPrev] = useState(0);
  const target  = props.target;
  const duration = props.duration || 300; // ms
  const interval = props.interval || 20; // ms
  const [value, setValue] = useState(prev);

  const isUp = prev <= target;
  const diff = Math.abs(target - prev);
  const numSteps = Math.ceil(duration / interval);
  const step = Math.max(1, Math.ceil(diff / numSteps));
  const delta = isUp ? step : -step;

  useEffect(() => {
    const timer = setInterval(() => {
      const next = value + delta;
      if (isUp && next < target || !isUp && next > target) {
        setValue(next);
      } else {
        setValue(target);
        setPrev(target);
        clearInterval(timer);
      }
    }, interval);
    return () => clearInterval(timer);
  });

  return (
    <span style={{...props.style}}>
      {value}
    </span>
  );
};

export default AnimationCounter;
