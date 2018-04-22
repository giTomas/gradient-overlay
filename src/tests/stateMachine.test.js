import {transition} from '../finiteStateMachine';

const statesActRes = [
  ['IMAGE', 'startAnimation', 'FROMIMAGE'],
  ['FROMIMAGE', 'endAnimation', 'OVERLAY'],
  ['OVERLAY', 'startAnimation', 'FROMOVERLAY'],
  ['FROMOVERLAY', 'endAnimation', 'IMAGE']
]

const statesAct = [
  ['IMAGE', 'endAnimation'],
  ['FROMIMAGE', 'startAnimation'],
  ['OVERLAY', 'endAnimation'],
  ['FROMOVERLAY', 'startAnimation']
]

describe('Should return correct state', () => {

  // for (let [init, act, res] of statesActRes) {
  //   test(`Should return correct state ${res}`, () => {
  //     expect(transition(`${init}`, `${act}`)).toMatch(`${res}`);
  //   })
  // }

  for (let states of statesActRes) {
    const [init, act, res] = states;
    test(`Should return correct state ${res}`, () => {
      expect(transition(`${init}`, `${act}`)).toEqual(expect.arrayContaining(states));
    })
  }

  for (let [init, act] of statesAct) {
    test(`Should return undefined`, () => {
      expect(transition(`${init}`, `${act}`)).toBeUndefined();
    })
  }
});
