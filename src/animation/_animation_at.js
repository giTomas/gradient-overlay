export class Animation_at {
  constructor(draw, nf=50) {
    this._draw = draw;
    this._NF = nf;
  }

  animate() {
    if (this._rID) this._stopAni();
    this._dir *= -1;
    this._update()
  }

  _rID = null
  _f = 0
  _dir = -1

  stopAni() {
    cancelAnimationFrame(this.rID);
    this._rID = null;
  }

  _update = () => {
    this._f += this._dir
    let k = this._f/this._NF

    // let progress = +(k * 100).toFixed(2);
    this._draw(k);

    if(!(this._f % this._NF)) {
      this.stopAni();
      return;
    }

    this.rID = requestAnimationFrame(this._update);
  }
};

export default Animation_at;
