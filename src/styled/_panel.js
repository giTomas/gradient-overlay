import styled from 'styled-components';
import React from 'react';

const Text = styled.h1`
  display: flex;
  align-items: center;
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
  ${'' /* background-color: rgb(193, 154, 107, 0.85);
  background-color: rgb(1, 68, 33, 0.97); */}
  background-color: rgb(245, 245, 220, 0.85);
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
`;

const Fieldset = styled.fieldset`
  display: flex;
  margin-left: 0.4em;
  ${'' /* align-items: cen; */}
  flex-direction: column;
  border: 0;
  ${'' /* justify-content: center; */}
`;

const Legend = styled.legend`
  margin-bottom: 0.4em;
  font-size: 0.4em;
  font-weight: bold;
`;

const RangeLabel = styled.label`
  font-size: 0.3em;
  margin-bottom: 0.6em;
`;

const Range = styled.input.attrs({
  type: 'range'
})`
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
  }
  &:focus::-webkit-slider-runnable-track {
    background: #a9a9a9;;
  }
`;

const RadioLabel = styled.label`
  position: relative;
  font-size: 0.3em;
  margin-bottom: 0.1em;
  display: flex;
  align-items: center
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`

`;

const RadioButton = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 0.3em;
  border: 0;
  outline: none;
  ${'' /* visibility: hidden; */}
  }
  ${'' /* display: none; */}
`;

const Choices = ({
  items,
  state,
  handleChange}) => (
    <List>
      {items.map(choice => (
        // <RadioButton key={choice} choice={choice} state={state} handleChange={handleChange}/>
        <Item key={choice}>
          <RadioLabel>
            <RadioButton
              value={choice}
              checked={choice === state}
              // disabled=""
              onChange={handleChange}/>
            {choice}
          </RadioLabel>
        </Item>
      ))}
    </List>
);

// const timingChoices = ({ease, handleChange}) => ();

const Panel = ({ease, timing, anim, duration, progress, onChangeRangeHandler, onChangeRadionHandler}) => (
  <Container>
    <Text>Click on {progress === 100 ? 'the image' : 'the yellow screen'}.</Text>
    <Form>
      <Fieldset>
        <Legend>Timing:</Legend>
        <Choices items={timing} state={anim.timing} handleChange={onChangeRadionHandler('timing')}/>
      </Fieldset>
      <Fieldset>
        <Legend>Ease:</Legend>
        <Choices items={ease} state={anim.ease} handleChange={onChangeRadionHandler('ease')}/>
      </Fieldset>
      <Fieldset>
        <Legend>Duration:</Legend>
        <RangeLabel>{duration}ms</RangeLabel>
        <Range
          min="150"
          max="1350"
          step="150"
          value={duration}
          onChange={onChangeRangeHandler}
          disabled=""/>
      </Fieldset>
    </Form>
  </Container>
)

export default Panel;
