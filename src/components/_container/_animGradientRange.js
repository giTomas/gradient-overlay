import React, { PureComponent } from 'react';
import {Gradient} from '../_styled';
import {Animation_onClick} from '../../animation/';

class AnimGradientOnClick extends PureComponent {
  constructor(props) {
    super(props);

    // do tehe binding
    this.anim = new Animation_at(this._draw, 70);
    this.state = {
      progress: 100,
      fin: 85,
      stop: 26,
  }
 }

 _draw = (progress) => {
   this.setState( (prevState, props) => ({ ...prevState, ...progress}));
   // console.log(this.state)
 }

  render() {
    return (
      <GradientOnClick
        progress={this.state.stop}
        onClick={this.onClickHandler} />
      //  <h1 onClick={this.onClickHandler}>Progress: {this.state.progress}</h1>
    );
  }

  onClickHandler = () => {
    this.anim.animate();
  }
}

export default AnimGradientOnClick;
