import { useState, useEffect } from 'preact/hooks';

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
 */
const AnimationCounter = props => {
  const [value, setValue] = useState(0);
  const [prev, setPrev] = useState(0);
  const [target, setTarget] = useState(null);
  const duration = props.duration || 300; // ms
  const interval = props.interval || 20; // ms
  if (target === null || props.target != target) {
    setPrev(value);
  }
  setTarget(props.target);

  const isUp = prev <= props.target;
  const diff = Math.abs(props.target - prev);
  const numSteps = Math.ceil(duration / interval);
  const step = Math.max(1, Math.ceil(diff / numSteps));
  const delta = isUp ? step : -step;

  useEffect(() => {
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
