import React, { PureComponent } from 'react';
import Background from './styled/background';
import Overlay from './styled/overlay';
import img from './images/jens-lelie-15662-unsplash.jpg';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      coords: {
        x: 200,
        y: 50
      },
      percs: 30
    }
  }

  render() {
    return (
      <Background imgSrc={img}>
        <Overlay {...this.state} onClick={this.handleClick}/>
      </Background>
    );
  }

  handleClick = (e) => {
    console.log(e.clientX, e.clientY);
    this.setState({
      coords: {
        x: e.clientX,
        y: e.clientY
      }
    })
  }

}

export default App;
