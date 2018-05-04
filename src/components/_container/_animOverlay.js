import React, { PureComponent } from 'react';
import memoize from 'lodash.memoize';
import {Background, Overlay, Panel} from '../_styled';
import {initialState, transition} from '../../finiteStateMachine';
import img from '../../images/jens-lelie-15662-unsplash-crop.jpg';
// import {anim} from '../../animation/';
import {AniM} from '../../animation/';

class AnimOverlay extends PureComponent {
  constructor(props) {
    super(props);

    this.anim = new AniM(this.log)

    this.state = {
      coords: { x: 0, y: 0 },
      ease: this.anim.ease,
      timing: this.anim.timing,
      anim: {
        ease: this.anim.ease[0],
        timing: this.anim.timing[0],
      },
      progress: 0,
      inProgress: false,
      duration: 750,
      uiState: initialState
    }


  }

  log(p) {
    console.log(p);
  }

  render() {
    return (
      <Background imgSrc={img}>
        <Panel
          {...this.state}
          onChangeRangeHandler={this.handleOnChangeRange}
          onChangeRadioHandler={this.handleOnChangeRadio}
        />
        <Overlay {...this.state} onClick={this.handleClick}/>
      </Background>
    );
  }

  // handleOnChangeRange = ({target}) => {
  //   this.setState({
  //     duration: target.value
  //   })
  // }

  handleOnChangeRange = (type) => ({target}) => {
    this.setState({
      [type]: target.value
    })
  };

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

    // this.anim.startAni({duration: 500})
  }

  execCmd = (uiState, action={}) => {

     // if (uiState === undefined) throw new Error('!')
     // console.log('newstate: ' + uiState);
     // console.log('cmd: ' + cmd);

     switch (uiState) {
       case ('FROMIMAGE'):
         this.setState({uiState});
         // console.log(`action ${cmd} --> uiState ${uiState}`)
         // anim.animate({
         //   timingKey: this.state.anim.timing,
         //   easeKey: this.state.anim.ease,
         //   draw: this.drawOverlayOn,
         //   duration: this.state.duration})
          this.anim.startAni({
            timingKey: this.state.anim.timing,
            easeKey: this.state.anim.ease,
            duration: this.state.duration,
            draw: this.drawOverlayOn})
         break;
       case ('FROMOVERLAY'):
         this.setState({uiState});
         // anim.animate({
         //   timingKey: this.state.anim.timing,
         //   easeKey: this.state.anim.ease,
         //   draw: this.drawOverlayOff,
         //   duration: this.state.duration})
         this.anim.startAni({
           timingKey: this.state.anim.timing,
           easeKey: this.state.anim.ease,
           duration: this.state.duration,
           draw: this.drawOverlayOff})
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

  // toggleAnimation = () => {
  //   if (this.state.inProgress) return;
  //   if (this.state.progress === 100) {
  //     anim.animate({
  //       timingKey: this.state.anim.timing,
  //       easeKey: this.state.anim.ease,
  //       draw: this.drawOverlayOn,
  //       duration: this.state.duration})
  //     // setTimeout(() => {console.log('stop'); anim.stop()}, 250)
  //   } else {
  //     anim.animate({
  //       timingKey: this.state.anim.timing,
  //       easeKey: this.state.anim.ease,
  //       draw: this.drawOverlayOff,
  //       duration: this.state.duration})
  //   }
  // }

  drawOverlayOff = (progress) => {
    const percents = progress * 100;
    this.setState({
      progress: percents,
      // inProgress: percents < 100,
      // uiState: percents < 100 ? 'FROMVERLAY' : 'IMAGE'
    });
    // console.log('%: ' + percents);
    if (percents >= 100) {
      // console.log('after anim: ' + this.state.uiState);
      const uiState = transition(this.state.uiState, 'endAnimation')
      this.execCmd(uiState);
      // console.log('after anim: ' + this.state.uiState);
    }
    // if (percents <= 0) {
    //   console.log('after anim: ' + this.state.uiState);
    //   const uiState = transition(this.state.uiState, 'back');
    //   this.execCmd(uiState);
    //   console.log('after anim: ' + this.state.uiState);
    // }
  }

  // drawOverlayOff = memoize(this._drawOverlayOff)

  drawOverlayOn = (progress) => {
    const percents = (1 - progress) * 100;
    this.setState({
      progress: percents,
      // inProgress:  percents > 0,
      // uiState: percents > 0  ? 'FROMIMAGE' : 'OVERLAY'
    });
    // console.log('%: ' + percents);
    if (percents <= 0) {
      // console.log('after anim: ' + this.state.uiState);
      const uiState = transition(this.state.uiState, 'endAnimation');
      this.execCmd(uiState);
      // console.log('after anim: ' + this.state.uiState);
    }
    // if (percents >= 100) {
    //   console.log('after anim: ' + this.state.uiState);
    //   const uiState = transition(this.state.uiState, 'back')
    //   this.execCmd(uiState);
    //   console.log('after anim: ' + this.state.uiState);
    // }
   // set state IMAGE || FROMOVERLAY and animation progress
  }

  // drawOverlayOn = memoize(this._drawOverlayOn)
}

export default AnimOverlay;
