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
      percs: 0,
      inProgress: false
    }
  }

  render() {
    return (
      <Background imgSrc={img}>
        <Text>Click on {this.state.percs === 100 ? 'the image' : 'the yellow screen'}.</Text>
        <Overlay {...this.state} onClick={this.handleClick}/>
      </Background>
    );
  }

  toggleAnimation = (percs=this.state.percs, inProgress=this.state.inProgress) => {
    if (inProgress) {
      return;
    }
    // console.log('perc: ' + this.state.percs)
    if (percs === 100) {
      this.animationOverlayOff()
    } else {
      this.animationOverlayOn()
    }
  }

  delay = 1000/50
  duration = 500

  // animationOverlayOn = () => {
  //   this.setState({
  //     inProgress: true
  //   });
  //   let timer = setInterval(() => {
  //     if (this.state.percs >= 100) {
  //       clearInterval(timer);
  //       this.setState({
  //         inProgress: false
  //       });
  //       return;
  //     }
  //     // console.log(this.state.percs)
  //     this.setState((prevState, props) => ({
  //       percs: prevState.percs+2.5
  //     }));
  //   }, this.delay)
  // }

  animationOverlayOn = (delay=this.delay, duration=this.duration) => {
    this.setState({
      inProgress: true
    });
    const start = Date.now();
    // const duration = 750;
    const step = 100/(duration/delay);


    let timer = setInterval(() => {
      const timePassed = Date.now() - start;
      if (timePassed >= duration) {
        clearInterval(timer);
        this.setState({
          inProgress: false,
          percs: 100
        });
        return;
      }
      this.setState((prevState, props) => ({
        percs: prevState.percs+step
      }));
    }, delay)
  }

  animationOverlayOff = (delay=this.delay, duration=this.duration) => {
    this.setState({
      inProgress: true
    });
    const start = Date.now();
    const step = 100/(duration/delay);

    let timer = setInterval(() => {
      const timePassed = Date.now() - start;
      if (timePassed >= duration) {
        clearInterval(timer)
        this.setState({
          inProgress: false,
          percs: 0
        });
        return;
      }
      // console.log(this.state.percs)
      this.setState((prevState, props) => ({
        percs: prevState.percs-step
      }));
    }, delay)
  }
  // animationOverlayOff = () => {
  //   this.setState({
  //     inProgress: true
  //   });
  //   let timer = setInterval(() => {
  //     if (this.state.percs <= 0) {
  //       clearInterval(timer)
  //       this.setState({
  //         inProgress: false,
  //         percs: 0
  //       });
  //       return;
  //     }
  //     // console.log(this.state.percs)
  //     this.setState((prevState, props) => ({
  //       percs: prevState.percs-2.5
  //     }));
  //   }, this.delay)
  // }

  handleClick = (e) => {
    this.setState({
      coords: {
        x: e.clientX,
        y: e.clientY
      }
    })
    this.toggleAnimation()
  }
}

const step = (duration, finalState, delay) => (
  duration / delay
);

export default App;
