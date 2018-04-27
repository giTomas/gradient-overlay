
class AniM {
  constructor(draw, nf=50) {
    this._draw = draw;
    this._NF = nf;
    this.ease = this._getKeys('ease');
    this.timing = this._getKeys('timing');
  }

  _start = null;
  _rID = null;
  _f = 1;
  _duration = 2000;
  _timingEaseFn = null;
  // _dir = -1;

  startAni = ({duration, draw, timingKey, easeKey}) => {
    this._makeEaseTiming(timingKey, easeKey);
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
    // let fraction = ((timestamp - this._start) / this._duration).toFixed(2);
    let fraction = ((timestamp - this._start) / this._duration);


    if (fraction > 1) {
      fraction= 1
    };

    let progress = this._timingEaseFn(fraction);
    // this._draw(progress*this._dir);
    this._draw(progress);

    if (fraction < 1) {
      this._rID  = window.requestAnimationFrame(this._update);
    }
  }

  _ease = {
    in:    timing => fr => timing(fr),
    out:   timing => fr => 1 - timing(1 - fr),
    outIn: timing => fr => (fr <= 0.5 ? (timing(2 * fr) / 2) : ((2 - timing(2 * (1 - fr))) / 2)),
  }

  _timing = {
    linear: fr => fr,
    quad:  (fr, x=2.5) => Math.pow(fr, x),
    circ:   fr =>  1 - Math.sin(Math.acos(fr)),
    sine: fr => Math.sin(Math.PI*fr),
  }

  _getKeys = (name) => {
    let keys = [];
    for (let key in this[`_${name}`]) {
      keys.push(key);
    }
    return keys;
  }

  _makeEaseTiming = (timingKey, easeKey) => {
    const easeFn = this._ease[this._checkKey(this._ease, easeKey)];
    const timingFn = this._timing[this._checkKey(this._timing, timingKey)];
    this._timingEaseFn = easeFn(timingFn);
  }

  _checkKey = (keys, key) => {
    // if (typeof key !== 'string' || key instanceof String) throw new Error(`Key "${key}" is not string`)
    if (typeof key !== 'string') throw new Error(`Key "${key}" is not string`);
    if (!(key in keys)) throw new Error(`Key "${key}" does not exists in ${keys === this.ease ? 'ease' : 'timing'}!`);
    // if (!(key in dict)) throw new Error(`Key "${key}" does not exists in ${dict === this._ease ? 'ease' : 'timing'}!`)
    // if (!obj[key]) throw new Error(`Key "${key}" does not exists in ${ obj === this._ease ? 'ease' : 'timing'}!`)
    return key;
  }

}

export default AniM;
