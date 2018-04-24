import React, { PureComponent } from 'react';
import {Gradient2} from '../_styled';
import {Animation_at} from '../../animation/';

class AnimGradient2 extends PureComponent {
  constructor(props) {
    super(props);

    // do tehe binding
    this.anim = new Animation_at(this._draw, 50);
    this.state = {
        progress: 0
  }
 }

 _draw = (progress) => {
   this.setState({progress})
 }

  render() {
    return (
      <Gradient2 onClick={this.onClickHandler} progress={this.state.progress}/>
      //  <h1 onClick={this.onClickHandler}>Progress: {this.state.progress}</h1>
    );
  }

  onClickHandler = () => {
    this.anim.animate(this._draw);
  }
}

export default AnimGradient2;
