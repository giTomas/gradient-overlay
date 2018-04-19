import React, { PureComponent } from 'react';
import Background from './styled/background';
import Overlay from './styled/overlay';
import RenderPanel from './styled/renderPanel';
import img from './images/jens-lelie-15662-unsplash-crop.jpg';
import animate from './animation/_animate';
import * as timing from './animation/_timing';

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
      progress: 0,
      inProgress: false,
      duration: 750,
      fromOverlay: false,
      fromImage: false
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
    // console.log(target.value)
    this.setState({
      duration: target.value
    })
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
      animate({timing: timing.circ, draw: this.drawOverlayOff, duration: this.state.duration});
    } else {
      animate({timing: timing['circ'], draw: this.drawOverlayOn, duration: this.state.duration})
    }
  }

  drawOverlayOn = (progress) => {
    // console.log('on progress: ' + progress*100)
    // console.log('on inProgress: ' + (progress*100 < 100 || progress <= 0))
    const percents = progress * 100
    this.setState({
      progress: percents,
      inProgress: percents < 100
    });
  }

  drawOverlayOff = (progress) => {
    // console.log('off progress: ' + ((1 - progress)*100))
    // console.log('off inProgress: ' +  ((1- progress) > 0))
    // console.log('arg rogress: ' + progress)
    const fr = 1 - progress
    this.setState({
      progress: fr * 100,
      inProgress:  fr > 0
    });
  }
}

export default App;
