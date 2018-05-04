import Timings from './_timings';
import memoize from 'lodash.memoize';


class AniM extends Timings {
  constructor(draw) {
    super();
    this._draw = draw;
    this.ease = this._getKeys('ease');
    this.timing = this._getKeys('timing');
    this._makeEaseTiming = memoize(this._makeET);
  }

  _start = null;
  _rID = null;
  _duration = 2000;
  _timingEaseFn = null;


  startAni = ({duration, draw, timingKey, easeKey}) => {
    this._timingEaseFn = this._makeEaseTiming(timingKey, easeKey);
    this._duration = duration;
    this._draw = draw;
    // direction of anim decrease increase
    // this._dir *= -1;
    if (this._rID) this.stopAni();
    this._rID = window.requestAnimationFrame(this._update);
  }

  stopAni = () => {
    window.cancelAnimationFrame(this._rID);
    this._rID = null;
    this._start = null;
  }

  _update = (timestamp) => {
    if (!this._start) this._start = timestamp;
    let fraction = ((timestamp - this._start) / this._duration);
    if (fraction > 1) fraction = 1
    let progress = this._timingEaseFn(fraction);
    this._draw(progress);
    if (fraction < 1) this._rID  = window.requestAnimationFrame(this._update);
  }
}

export default AniM;
// export default AniD;
