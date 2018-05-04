import React, { PureComponent } from 'react';
import {GradientOnClick} from '../_styled';
import {Animation_onClick} from '../../animation/';

class AnimGradientOnClick extends PureComponent {
  constructor(props) {
    super(props);

    // do tehe binding
    this.anim = new Animation_onClick(this._draw, 62);
    this.state = {
      progress: 100,
      colorSwap: true,
      x: '50%',
      y: '50%',
  }
 }

 _draw = (progress) => {
   this.setState( (prevState, props) => ({ ...prevState, ...progress}));
   // console.log(this.state)
 }

  render() {
    return (
      <GradientOnClick
        x={this.state.x}
        y={this.state.y}
        colorSwap={this.state.colorSwap}
        progress={this.state.progress}
        onClick={this.onClickHandler} />
      //  <h1 onClick={this.onClickHandler}>Progress: {this.state.progress}</h1>
    );
  }

  onClickHandler = ({clientX, clientY}) => {
    this.setState({x: `${clientX}px`, y: `${clientY}px`})
    this.anim.animate();
  }
}

export default AnimGradientOnClick;
