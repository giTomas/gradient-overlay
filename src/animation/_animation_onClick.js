export class Animation_onClick {
  constructor(draw, nf=50) {
    this._draw = draw;
    this._NF = nf;
  }

  animate() {

    if (!this._rID) {
      this._update();
      this._start = performance.now();
    };
  }

  _rID = null
  _f = 0
  _colorSwap = true
  _start = null;

  _stopAni() {
    cancelAnimationFrame(this._rID);
    this._rID = null;
    console.log(`duratiom: ${performance.now() - this._start}`)
  }

  _update = () => {

    let k = ++this._f/this._NF

    let progress = +(k*100).toFixed(2);
    console.log(this._f);
    this._draw({progress});

    if(!(this._f % this._NF)) {
      this._f = 0;
      this._colorSwap = !this._colorSwap;
      this._draw({colorSwap: this._colorSwap, progress: 0});
      this._stopAni();
      return;
    }

    this._rID = requestAnimationFrame(this._update);
  }
};

export default Animation_onClick;
