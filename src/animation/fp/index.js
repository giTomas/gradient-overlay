import animate from './_animate';
import * as timingFns from './_timing';
import * as easeFns from './_ease';

const animation = (
  {timing, ease, draw, duration},
  animateFn=animate,
  timings=timingFns,
  eases=easeFns
  ) => {
  return (
    t=timings[timing],
    e=eases[ease]
    ) => {
    animateFn({
      timing: e(t),
      draw: draw,
      duration: duration})
  }
};

export default animation;
