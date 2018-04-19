import React, { PureComponent } from 'react';
import Background from './styled/background';
import Overlay from './styled/overlay';
import RenderPanel from './styled/renderPanel';
import img from './images/jens-lelie-15662-unsplash-crop.jpg';

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
      delay: 1000/75
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
    console.log(target.value)
    this.setState({
      duration: target.value
    })
  }

  toggleAnimation = (progress=this.state.progress, inProgress=this.state.inProgress) => {
    if (inProgress) {
      return;
    }
    // console.log('perc: ' + this.state.progress)
    if (progress === 100) {
      this.animationOverlayOff()
    } else {
      this.animationOverlayOn()
    }
  }

  animationOverlayOn = (delay=this.state.delay, duration=this.state.duration) => {
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
          progress: 100
        });
        return;
      }
      this.setState((prevState, props) => ({
        progress: prevState.progress+step
      }));
    }, delay)
  }

  animationOverlayOff = (delay=this.state.delay, duration=this.state.duration) => {
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
          progress: 0
        });
        return;
      }
      // console.log(this.state.progress)
      this.setState((prevState, props) => ({
        progress: prevState.progress-step
      }));
    }, delay)
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
}

export default App;
