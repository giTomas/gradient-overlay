// import React from 'react';
import styled from 'styled-components';

const Gradient = styled.div.attrs({
  style: ({progress}) => ({
    'backgroundImage': `linear-gradient(90deg, #ff9800 ${progress}%, #3c3c3c 0)`
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

const Gradient3 = styled.div.attrs({
  style: ({progress, colorSwap}) => ({
    'backgroundImage': `linear-gradient(90deg, ${colorSwap ? '#3c3c3c' : '#ff9800'}
    ${progress}%, ${colorSwap ? '#ff9800' : '#3c3c3c'} 0)`
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

const Gradient4 = styled.div.attrs({
  style: ({angle}) => ({
    'backgroundImage': `linear-gradient(${angle}deg, #ff9800 50%, #3c3c3c 0)`
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

const GradientRadial = styled.div.attrs({
  style: ({progress}) => ({
    'backgroundImage': `radial-gradient(circle, #ff9800 ${progress}%, #3c3c3c 0)`
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

const GradientOnClick = styled.div.attrs({
  style: ({x, y, progress, colorSwap}) => ({
    'backgroundImage': `radial-gradient(circle at ${x} ${y},
      ${colorSwap ? '#ff9800' : '#3c3c3c'} ${progress}%, ${colorSwap ? '#3c3c3c' : '#ff9800'} 0)`
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


export {Gradient, Gradient2, Gradient3, Gradient4, GradientRadial, GradientOnClick};
