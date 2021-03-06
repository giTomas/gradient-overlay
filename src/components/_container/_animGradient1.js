import React, { PureComponent } from 'react';
import {Gradient} from '../_styled';
import {Animation_at} from '../../animation/';

class AnimGradient1 extends PureComponent {
  constructor(props) {
    super(props);

    // do tehe binding
    this.anim = new Animation_at(this._draw, 70);
    this.state = {
        progress: 0
  }
 }

 _draw = (result) => {
   this.setState( (prevState, props) => ({ ...prevState, ...result}));
 }

  render() {
    return (
      <Gradient onClick={this.onClickHandler} progress={this.state.progress}/>
      //  <h1 onClick={this.onClickHandler}>Progress: {this.state.progress}</h1>
    );
  }

  onClickHandler = () => {
    this.anim.animate(this._draw);
  }
}

export default AnimGradient1;
