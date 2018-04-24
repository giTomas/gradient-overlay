// import React from 'react';
import styled from 'styled-components';

const Gradient = styled.div.attrs({
  style: ({progress}) => ({
    'background-image': `linear-gradient(90deg, #ff9800 ${progress}%, #3c3c3c 0)`
  })
})`
  width: 100vw;
  height: 100vh;
  position: relative;
  &:after {
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: 'Click!';
    font: calc(16vmin + 3rem)/100vh 'Leckerli One', cursive;
    background: inherit;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: invert(1) grayscale(1) contrast(3);

  }
`;

const Gradient2 = Gradient.extend`
  background-size: 5em;
`;

export {Gradient, Gradient2};
