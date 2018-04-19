import styled from 'styled-components';
import React from 'react';

const Text = styled.h1`
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
  box-shadow: 1px 1px 2px rgba(0,0,0,0.25);
  font-family: 'Oxygen', sans-serif;
  border-radius: 0.15em;
`;

const Form = styled.form`
  display: flex;
  ${'' /* align-items: cen; */}
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 0.3em;
  margin: 0;
  padding: 0 0 0.75em 0;
`;

const Input = styled.input`
  -webkit-appearance: none;
  border: 0;
  outline: none;
  margin: 0;
  &::-moz-focus-outer {
      border: 0;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-moz-range-thumb {
    box-shadow: inset -3px -5px 5px #000000, inset 2px 2px 5px #0d0d0d;
    border: 1px solid #000000;
    height: 1.2em;
    width: 1.2em;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 0.85em;
    width: 0.4em;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -0.3em;
    box-shadow: inset 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  }
  &::-moz-range-track {
    width: 100%;
    height: 0.5em;
    cursor: pointer;
    box-shadow: inset 2px 3px 3px #000000, inset -1px -1px 2px #0d0d0d;
    ${'' /* box-shadow: inset 2px 3px 3px #000000, inset -1px -1px 2px grey; */}
    background: #a9a9a9;
    ${'' /* background: #d3d3d3; */}
    ${'' /* background: #000000; */}
    ${'' /* background: repeating-linear-gradient(90deg,  #000000 , #000000 1%, #a9a9a9 1%, #a9a9a9 11%); */}
    border-radius: 0.5em;
    ${'' /* border: 0.1px solid #010101; */}
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height:0.25em;
    cursor: pointer;
    box-shadow: inset 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: brown;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &:focus::-webkit-slider-runnable-track {
    background: brown;
  }
`;

const RenderPanel = ({duration, progress, onChangeHandler, range}) => (
  <Container>
    <Text>Click on {progress === 100 ? 'the image' : 'the yellow screen'}.</Text>

    <Form>
      <Label>Duration: {duration}ms</Label>
      <Input
        type="range"
        min={range.min}
        max={range.max}
        step={range.step}
        value={duration}
        onChange={onChangeHandler} />

    </Form>
  </Container>
)

export default RenderPanel;
