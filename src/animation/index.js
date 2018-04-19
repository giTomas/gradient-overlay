import animate from './_animate';
import * as timingFns from './_timing';
import * as easeFns from './_ease';

// class animation {
//   constructor() {
//
//   }
// }

const animation = (
  {timing, ease, draw, duration},
  animateFn=animate,
  timings=timingFns,
  eases=easeFns) => {
  // const {timing, ease, draw, duration} = conf;
  return function(t=timings[timing],e=eases[ease]) {
    animateFn({
      timing: e(t),
      draw: draw,
      duration: duration})
  }
};


export default animation;
