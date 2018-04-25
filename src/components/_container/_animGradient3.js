import React, { PureComponent } from 'react';
import {Gradient3} from '../_styled';
import {Animation_at2} from '../../animation/';

class AnimGradient3 extends PureComponent {
  constructor(props) {
    super(props);

    // do tehe binding
    this.anim = new Animation_at2(this._draw, 50);
    this.state = {
        progress: 0,
        colorSwap: true,
  }
 }

 _draw = (result) => {
   this.setState( (prevState, props) => ({ ...prevState, ...result}));
 }

  render() {
    return (
      <Gradient3 onClick={this.onClickHandler} progress={this.state.progress} colorSwap={this.state.colorSwap}/>
      //  <h1 onClick={this.onClickHandler}>Progress: {this.state.progress}</h1>
    );
  }

  onClickHandler = () => {
    this.anim.animate();
  }
}

export default AnimGradient3;
