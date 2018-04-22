import React, { PureComponent } from 'react';
import Background from './styled/background';
import Overlay from './styled/overlay';
import RenderPanel from './styled/panel';
import img from './images/jens-lelie-15662-unsplash-crop.jpg';
import anim from './animation/';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      coords: { x: 0, y: 0 },
      ease: anim.ease,
      timing: anim.timing,
      anim: {
        ease: anim.ease[0],
        timing: anim.timing[0],
      },
      progress: 0,
      inProgress: false,
      duration: 750,
      state: 'OVERLAY',
    }
  }

  render() {
    return (
      <Background imgSrc={img}>
        <RenderPanel
          {...this.state}
          onChangeRangeHandler={this.handleOnChangeRange}
          onChangeRadionHandler={this.handleOnChangeRadio}
        />
        <Overlay {...this.state} onClick={this.handleClick}/>
      </Background>
    );
  }

  handleOnChangeRange = ({target}) => {
    this.setState({
      duration: target.value
    })
  }

  handleOnChangeRadio = (type) => ({target}) => {
    this.setState((prevState, props) => ({
        anim: {...prevState.anim, [type]: target.value }
    }));
    // console.log(type)
    // setTimeout(()=>{console.log(this.state.anim)}, 100)
  }

  handleClick = ({clientX, clientY}) => {
    this.setState({
      coords: {
        x: clientX,
        y: clientY
      }
    })
    this.toggleAnimation()
  }

  toggleAnimation = () => {
    if (this.state.inProgress) return;
    if (this.state.progress === 100) {
      anim.animate({
        timingKey: this.state.anim.timing,
        easeKey: this.state.anim.ease,
        draw: this.drawOverlayOff,
        duration: this.state.duration})
    } else {
      anim.animate({
        timingKey: this.state.anim.timing,
        easeKey: this.state.anim.ease,
        draw: this.drawOverlayOn,
        duration: this.state.duration})
    }
  }

  drawOverlayOn = (progress) => {
    const percents = progress * 100;
    this.setState({
      progress: percents,
      inProgress: percents < 100
    });
  }

  drawOverlayOff = (progress) => {
    const percents = (1 - progress) * 100;
    this.setState({
      progress: percents,
      inProgress:  percents > 0
    });
  }
}

export default App;
