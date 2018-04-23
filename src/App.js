import React, { PureComponent } from 'react';
// import Background from './styled/background';
// import Overlay from './styled/overlay';
// import RenderPanel from './styled/panel';
import {Background, Overlay, Panel} from './styled';
import {initialState, transition} from './finiteStateMachine';
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
      uiState: initialState
    }
  }

  render() {
    return (
      <Background imgSrc={img}>
        <Panel
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
    // this.toggleAnimation();
    // console.log('initState: ' + this.state.uiState);
    // console.log('prog: ' + this.state.progress)
    const newUiState = transition(this.state.uiState, 'startAnimation')
    this.execCmd(newUiState);
  }

  execCmd = (uiState, action={}) => {

     // if (uiState === undefined) throw new Error('!')
     // console.log('newstate: ' + uiState);
     // console.log('cmd: ' + cmd);

     switch (uiState) {
       case ('FROMIMAGE'):
         this.setState({uiState});
         // console.log(`action ${cmd} --> uiState ${uiState}`)
         anim.animate({
           timingKey: this.state.anim.timing,
           easeKey: this.state.anim.ease,
           draw: this.drawOverlayOn,
           duration: this.state.duration})
         break;
       case ('FROMOVERLAY'):
         this.setState({uiState});
         anim.animate({
           timingKey: this.state.anim.timing,
           easeKey: this.state.anim.ease,
           draw: this.drawOverlayOff,
           duration: this.state.duration})
         break;
       case ('IMAGE'):
         this.setState({uiState});
         break;
       case ('OVERLAY'):
         this.setState({uiState});
         break;
       default:
         break;
     }
  }

  toggleAnimation = () => {
    if (this.state.inProgress) return;
    if (this.state.progress === 100) {
      anim.animate({
        timingKey: this.state.anim.timing,
        easeKey: this.state.anim.ease,
        draw: this.drawOverlayOn,
        duration: this.state.duration})
      // setTimeout(() => {console.log('stop'); anim.stop()}, 250)
    } else {
      anim.animate({
        timingKey: this.state.anim.timing,
        easeKey: this.state.anim.ease,
        draw: this.drawOverlayOff,
        duration: this.state.duration})
    }
  }

  drawOverlayOff = (progress) => {
    const percents = progress * 100;
    this.setState({
      progress: percents,
      // inProgress: percents < 100,
      // uiState: percents < 100 ? 'FROMVERLAY' : 'IMAGE'
    });

    if (percents >= 100) {
      // console.log('after anim: ' + this.state.uiState);
      const uiState = transition(this.state.uiState, 'endAnimation')
      this.execCmd(uiState);
  }
  }

  drawOverlayOn = (progress) => {
    const percents = (1 - progress) * 100;
    this.setState({
      progress: percents,
      // inProgress:  percents > 0,
      // uiState: percents > 0  ? 'FROMIMAGE' : 'OVERLAY'
    });

    if (percents <= 0) {
      // console.log('after anim' + this.state.uiState);
      const uiState = transition(this.state.uiState, 'endAnimation');
      this.execCmd(uiState);
    }
   // set state IMAGE || FROMOVERLAY and animation progress
  }
}

export default App;
