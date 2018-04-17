import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  margin: 0;
  font-size: 50px;
  font-family: sans-serif;
  position: absolute;
  ${'' /* color: ; */}
  top: 5px;
  left: 5px;
  z-index: 1000;
`;

export default Text;
