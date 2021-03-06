
export class Animation {
  constructor() {
    this.ease = this._getKeys('ease');
    this.timing = this._getKeys('timing');
  }

  animate({timingKey, easeKey, draw, duration}) {
    const timing = this._makeEaseTiming(timingKey, easeKey)
    let start = performance.now();
    requestAnimationFrame(function animate(time) {

      let timeFraction = (time-start)/duration;
      if (timeFraction > 1) {
        timeFraction = 1
      };
      let progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  _getKeys(name) {
    let keys = [];
    for (let key in this[`_${name}`]) {
      keys.push(key);
    }
    return keys;
  }

  _makeEaseTiming(timingKey, easeKey) {
    const easeFn = this._ease[this._checkKey(this._ease, easeKey)];
    const timingFn = this._timing[this._checkKey(this._timing, timingKey)];
    return easeFn(timingFn);
  }

  _ease = {
    in:    timing => fr => timing(fr),
    out:   timing => fr => 1 - timing(1 - fr),
    outIn: timing => fr => (fr <= 0.5 ? (timing(2 * fr) / 2) : ((2 - timing(2 * (1 - fr))) / 2)),
  }

  _timing = {
    linear:   fr => fr,
    quad:    (fr, x=2.5) => Math.pow(fr, x),
    circ:     fr =>  1 - Math.sin(Math.acos(fr)),
    // back:    (fr, x=5) => (Math.pow(fr, 2) * ((x + 1) * fr - x)),
    // bounce:   fr => {}
  }

  _checkKey(keys, key) {
    // if (typeof key !== 'string' || key instanceof String) throw new Error(`Key "${key}" is not string`)
    if (typeof key !== 'string') throw new Error(`Key "${key}" is not string`);
    if (!(key in keys)) throw new Error(`Key "${key}" does not exists in ${keys === this.ease ? 'ease' : 'timing'}!`);
    // if (!(key in dict)) throw new Error(`Key "${key}" does not exists in ${dict === this._ease ? 'ease' : 'timing'}!`)
    // if (!obj[key]) throw new Error(`Key "${key}" does not exists in ${ obj === this._ease ? 'ease' : 'timing'}!`)
    return key;
  }
};

export default Animation;
