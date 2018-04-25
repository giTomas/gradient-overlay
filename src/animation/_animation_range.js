export class Animation_range {
  constructor(draw, nf=50) {
    this._draw = draw;
    this._NF = nf;
  }

  animate() {
    if (this._rID) this._stopAni;
    dir *= -1;
    this._update()
  }

  _rID = null
  _f = 0
  _dir = -1

  _stopAni() {
    cancelAnimationFrame(this._rID);
    this._rID = null;
  }

  _update = () => {
    this._f += this._dir;
    let this._k = f/this._NF


    let progress = +(k*100).toFixed(2);
    this._draw({progress});

    if(!(this._f % this._NF)) {
      this._stopAni();
      return;
    }

    this._rID = requestAnimationFrame(this._update);
  }
};

export default Animation_range;
