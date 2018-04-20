import React, { PureComponent } from 'react';
import Background from './styled/background';
import Overlay from './styled/overlay';
import RenderPanel from './styled/renderPanel';
import img from './images/jens-lelie-15662-unsplash-crop.jpg';
import anim from './animation/';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      coords: {
        x: 0,
        y: 0
      },
      range: {
        min: "150",
        max: "1350",
        step: "150",
      },
      anim: {
        ease: 'in',
        timing: 'quad',
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
        <RenderPanel {...this.state} onChangeHandler={this.handleOnChange}/>
        <Overlay {...this.state} onClick={this.handleClick}/>
      </Background>
    );
  }

  handleOnChange = ({target}) => {
    this.setState({
      duration: target.value
    })

  //   this.setState((prevState, props) => ({
  //       anim: {...prevState.anim, duration: target.value }
  //     }));
  }

  handleClick = (e) => {
    this.setState({
      coords: {
        x: e.clientX,
        y: e.clientY
      }
    })
    this.toggleAnimation()
  }

  toggleAnimation = (progress=this.state.progress, inProgress=this.state.inProgress) => {
    if (inProgress) return;
    if (progress === 100) {
      anim.animate({
        timingKey: this.state.anim.timing,
        easeKey: this.state.anim.ease,
        draw: this.drawOverlayOff,
        duration: this.state.duration})
    } else {
      anim.animate({
        timingKey: "quad",
        easeKey: "outIn",
        draw: this.drawOverlayOn,
        duration: this.state.duration})
    }
  }

  drawOverlayOn = (progress) => {
    const percents = progress * 100
    this.setState({
      progress: percents,
      inProgress: percents < 100
    });
  }

  drawOverlayOff = (progress) => {
    // const fr = 1 - progress;
    const percents = (1 - progress)*100
    this.setState({
      progress: percents,
      inProgress:  percents > 0
    });
  }
}

export default App;
