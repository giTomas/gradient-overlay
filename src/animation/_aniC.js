// import memoize from 'lodash.memoize';
import Timings from './_timings';

class AniC extends Timings {
  constructor(draw, fps=70) {
    super();
    this._draw = draw;
    this._fps = fps;
  };

  // _stop = false;
  _frameCount = 0;
  _fps = null;
  _fpsInterval = null;
  _start = null;
  _now = null;
  _then = null;
  _elapsed = null;
  _duration = null;
  _ID = null;
  _totalFrames = null;

  start = ({duration, draw=this._draw, timingKey, easeKey, fps=this._fps}) => {
    // console.log('start');
    // this._stop = false;
    this._fps = fps
    this._timingEaseFn = this._makeEaseTiming(timingKey, easeKey);
    this._duration = duration;
    this._draw = draw;
    this._then = performance.now();
    this._start = this._then;
    this._fpsInterval = 1000 / this._fps;
    this._totalFrames = Math.floor(this._duration/this._fpsInterval);
    // console.log('total: ' + this._totalFrames)

    this._update();
  };

  stop = () => {
    window.cancelAnimationFrame(this._ID);
    this._ID = null;
    this._frameCount = 0
    this._start = null;
  };

  _update = () => {
    if (this._totalFrames <= this._frameCount) {
      this.stop();
      return;
    }


    this._ID = window.requestAnimationFrame(this._update);

    this._now = performance.now();
    this._elapsed = this._now - this._then;

    //Throttling condition
    if (this._elapsed > this._fpsInterval) {
      this._then = this._now - (this._elapsed % this._fpsInterval);
      this._frameCount++;
      const progress = this._frameCount/this._totalFrames;

      this._draw(progress);
    }
  };
};

export default AniC;
