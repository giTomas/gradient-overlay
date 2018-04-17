import React, { PureComponent } from 'react';
import Background from './styled/background';
import Overlay from './styled/overlay';
import Text from './styled/text';
import img from './images/jens-lelie-15662-unsplash.jpg';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      coords: {
        x: 0,
        y: 0
      },
      percs: 0
    }
  }

  render() {
    return (
      <Background imgSrc={img}>
        <Text>Click on screen.</Text>
        <Overlay {...this.state} onClick={this.handleClick}/>
      </Background>
    );
  }

  toggleAnimation = (perc=this.state.percs) => {
    if (perc === 100) {
      console.log(`100 === ${perc}, than Off`)
      this.animationOverlayOff()
    } else {
      console.log(`${perc}%, than On`)
      this.animationOverlayOn()
    }
  }

  delay = 1000/60
  timing = 2

  animationOverlayOn = () => {
    const delay = this.delay;
    let timer = setInterval(() => {
      if (this.state.percs >= 100) {
        clearInterval(timer)
        return;
      }
      console.log(this.state.percs)
      this.setState((prevState, props) => ({
        percs: prevState.percs+2.5
      }));
    }, delay)
  }

  animationOverlayOff = () => {
    const delay = this.delay;
    let timer = setInterval(() => {
      if (this.state.percs <= 0) {
        clearInterval(timer)
        return;
      }
      console.log(this.state.percs)
      this.setState((prevState, props) => ({
        percs: prevState.percs-2.5
      }));
    }, delay)
  }

  handleClick = (e) => {
    // console.log(e.clientX, e.clientY);
    this.toggleAnimation()
    this.setState({
      coords: {
        x: e.clientX,
        y: e.clientY
      }
    })
  }

}

export default App;
