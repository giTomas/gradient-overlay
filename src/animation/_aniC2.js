// import memoize from 'lodash.memoize';
import Timings from './_timings';

class AniC2 extends Timings {
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
    this._fpsInterval = Math.floor(1000 / this._fps);
    this._totalFrames = Math.floor(this._duration/this._fpsInterval);
    // console.log('total: ' + this._totalFrames)

    this._ID = window.requestAnimationFrame(this._update);
  };

  stop = () => {
    console.log('period: ' + (performance.now() - this._start));
    console.log('periodAbs: ' + (this._duration));
    console.log('totalFrames: ' + this._frameCount);
    console.log('Frames: ' + this._totalFrames);
    console.log('fpsInterval: ' + this._fpsInterval);
    window.cancelAnimationFrame(this._ID);
    this._ID = null;
    this._frameCount = 0
    this._start = null;
    this._elapsed = 0;
  };

  _update = () => {
    if (this._duration <= this._elapsed) {
      this.stop();
      return;
    }

    this._ID = window.requestAnimationFrame(this._update);

    this._now = performance.now();
    this._elapsed = Math.ceil(this._now - this._start);
    this._frameCount += 1;
    // this._frameCount += 1;
    console.log('------------------------');
    console.log('------------------------');
    console.log('ELAPSED:' + this._elapsed);
    console.log('Frame:' + this._frameCount);

    // Throttling condition
    // if (this._elapsed >= this._fpsInterval) {
    //
    //
    //   this._then = this._now - (this._elapsed % this._fpsInterval);
      // this._then = this._now - this._elapsed;

      const calc = this._elapsed/this._duration;
      const progress = calc > 1 ? 1 : calc;
      // // console.log('------------------------');
      // // console.log('elapsed:' + this._elapsed);
      // console.log('frame:' + this._frameCount);
      console.log('progress:' + progress);



      this._draw(progress);
    // }

  };
};

export default AniC2;
