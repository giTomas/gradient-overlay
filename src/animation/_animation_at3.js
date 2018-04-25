export class Animation_at3 {
  constructor(draw, nf=50) {
    this._draw = draw;
    this._NF = nf;
  }

  animate() {
    if (this._rID) this.stopAni();
    this._dir *= -1;
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
    this._f += this._dir;
    let k = this._f/this._NF

    let angle = +(k*180).toFixed(2);
    this._draw({angle});

    if(!(this._f % this._NF)) {
      this.stopAni();
      return;
    }

    this._rID = requestAnimationFrame(this._update);
  }
};

export default Animation_at3;
