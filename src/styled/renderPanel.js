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
  padding: 0.4em;
  ${'' /* background-color: rgb(255, 255, 255, 0.85); */}
  background-color: rgb(193, 154, 107, 0.85);
  background-color: rgb(1, 68, 33, 0.97);
  background-color: rgb(245, 245, 220, 0.85);
  ${'' /* color: white; */}
  font-size: calc(1em + 2vw);
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.15);
  ${'' /* box-shadow: 1px 1px 2px rgba(193, 154, 107, 1); */}
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
  padding: 0 0 0.6em 0;
`;

const Input = styled.input`
  -webkit-appearance: none;
  border: 0;
  outline: none;
  padding: 0.6em 0 0 0;
  background-color: transparent;
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
    height: 1.2em;
    width: 1.2em;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    margin-top: -0.33em;
    box-shadow: inset -3px -5px 5px #000000, inset 2px 2px 5px #0d0d0d;
  }
  &::-moz-range-track {
    width: 100%;
    height: 0.525em;
    cursor: pointer;
    box-shadow: inset 3px 3px 4px #000000, inset -1px -1px 1px #0d0d0d;
    background: #a9a9a9;
    border-radius: 0.5em;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.525em;
    cursor: pointer;
    box-shadow: inset 3px 3px 4px #000000, inset -1px -1px 1px #0d0d0d;
    background: #a9a9a9;
    border-radius: 0.5em;
    ${'' /* border: 0.2px solid #010101; */}
  }
  &:focus::-webkit-slider-runnable-track {
    background: #a9a9a9;;
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
