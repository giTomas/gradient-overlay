import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: green;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Background = ({children, imgSrc}) => (
  <Container>
    <Image src={imgSrc} alt='background-image'/>
    {children}
  </Container>
)

export default Background;
