import styled from 'styled-components';
import React from 'react';

const Text = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-family: sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0.2em;
  padding: 0.2em 0.4em;
  background-color: rgb(255, 255, 255, 0.85);
  font-size: calc(1em + 2vw);
  font-family: sans-serif;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 5px rgba(0,0,0,0.09);
`;

const Form = styled.form`
  display: flex;
  ${'' /* align-content: center; */}
  align-items: center;
  font-size: 0.5em;
`;

const Label = styled.label`
  margin: 0;
  padding: 0 0.25em 0 0;
`;

const RenderPanel = ({duration, percs, onChangeHandler=(e)=>{console.log(e.target.value)}}) => (
  <Container>
    <Text>Click on {percs === 100 ? 'the image' : 'the yellow screen'}.</Text>
    <Form>
      <Label>Duration: {duration}</Label>
      <input type="range" min="150" max="1500" step="150" value={duration} onChange={onChangeHandler} list="list"/>
    </Form>
  </Container>
)

export default RenderPanel;
