import styled from 'styled-components';
import React from 'react';

const Text = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: 1;
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
  box-shadow: 1px 0 5px rgba(0,0,0,0.2);
  font-family: 'Oxygen', sans-serif;
`;

const Form = styled.form`
  display: flex;
  ${'' /* align-content: center; */}
  align-items: center;

`;

const Label = styled.label`
  font-size: 0.45em;
  margin: 0;
  padding: 0 0.25em 0 0;
`;

const Input = styled.input`
  margin: 0;
  border: 0;
  outline: none;
  ${'' /* &:focus {
    border: 0;
    outline: none;
  } */}
  &::-moz-focus-outer {
      border: 0;
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 0.85em;
    width: 0.4em;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-moz-range-track {
    width: 100%;
    height: 0.25em;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
`;

const RenderPanel = ({duration, progress, onChangeHandler=(e)=>{console.log(e.target.value)}}) => (
  <Container>
    <Text>Click on {progress === 100 ? 'the image' : 'the yellow screen'}.</Text>
    <Form>
      <Label>Duration: {duration}</Label>
      <Input type="range" min="150" max="1500" step="150" value={duration} onChange={onChangeHandler} />
    </Form>
  </Container>
)

export default RenderPanel;
