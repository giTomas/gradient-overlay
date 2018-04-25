import React, { PureComponent } from 'react';
import {Gradient4} from '../_styled';
import {Animation_at3} from '../../animation/';

class AnimGradient4 extends PureComponent {
  constructor(props) {
    super(props);

    // do tehe binding
    this.anim = new Animation_at3(this._draw, 50);
    this.state = {
      angle: 0
  }
 }

 _draw = (angle) => {
   this.setState( (prevState, props) => ({ ...prevState, ...angle}));
 }

  render() {
    return (
      <Gradient4 onClick={this.onClickHandler}angle={this.state.angle}/>
      //  <h1 onClick={this.onClickHandler}>Progress: {this.state.progress}</h1>
    );
  }

  onClickHandler = () => {
    this.anim.animate();
  }
}

export default AnimGradient4;
