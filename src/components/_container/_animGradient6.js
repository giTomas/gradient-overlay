import React, { PureComponent } from 'react';
import {GradientRadial} from '../_styled';
import {Animation_at} from '../../animation/';

class AnimGradient6 extends PureComponent {
  constructor(props) {
    super(props);

    // do tehe binding
    this.anim = new Animation_at(this._draw, 70);
    this.state = {
      progress: 100
  }
 }

 _draw = (progress) => {
   this.setState( (prevState, props) => ({ ...prevState, ...progress}));
 }

  render() {
    return (
      <GradientRadial onClick={this.onClickHandler} progress={this.state.progress}/>
      //  <h1 onClick={this.onClickHandler}>Progress: {this.state.progress}</h1>
    );
  }

  onClickHandler = () => {
    this.anim.animate();
  }
}

export default AnimGradient6;
