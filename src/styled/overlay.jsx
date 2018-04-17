import React from 'react';
import styled from 'styled-components';

// TODO:
// (x, y) coordinates - where gradient start to fade
// transparent percentage - progress of gradient

// const Overlay = styled.div.attrs({
//   x: props => props.coords.x || 0,
//   y: props => props.coords.y || 0,
//   perc: props => props.percs || 0
// })`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background:
//     radial-gradient(circle at ${props => props.x}px ${props => props.y}px,
//                     transparent ${props => props.perc}%, yellow 0%);
// `;

const Overlay = styled.div.attrs({
  style: ({coords, percs}) => ({
    background: `radial-gradient(circle at ${coords.x}px ${coords.y}px,
                transparent ${percs}%, yellow 0%)`
  })
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default Overlay;
