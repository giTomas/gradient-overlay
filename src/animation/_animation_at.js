export class Animation_at {
  constructor(draw, nf=50) {
    this._draw = draw;
    this._NF = nf;
  }

  animate() {
    if (this._rID) this.stopAni();
    this._dir *= -1;
    // console.log('dir: ' + this._dir)
    this._update()
  }

  _rID = null
  _f = 0
  _dir = -1

  stopAni() {
    cancelAnimationFrame(this._rID);
    this._rID = null;
  }

  _update = () => {
    this._f += this._dir
    // console.log('this.f: ' + this._f)
    let k = this._f/this._NF
    // console.log('k: ' + k)

    let progress = +(k * 100).toFixed(2);
    this._draw({progress});

    if(!(this._f % this._NF)) {
      this.stopAni();
      return;
    }

    this._rID = requestAnimationFrame(this._update);
  }
};

export default Animation_at;
