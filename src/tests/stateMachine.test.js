import {transition} from '../finiteStateMachine';

const statesActRes = [
  ['IMAGE', 'startAnimation', 'FROMIMAGE'],
  ['FROMIMAGE', 'endAnimation', 'OVERLAY'],
  ['OVERLAY', 'startAnimation', 'FROMOVERLAY'],
  ['FROMOVERLAY', 'endAnimation', 'IMAGE'],
  ['FROMIMAGE', 'progress', 'FROMIMAGE'],
  ['FROMOVERLAY', 'progress', 'FROMOVERLAY'],
  ['FROMOVERLAY', 'back', 'OVERLAY'],
  ['FROMIMAGE', 'back', 'IMAGE'],
]

const statesAct = [
  ['IMAGE', 'endAnimation'],
  ['IMAGE', 'progress'],
  ['IMAGE', 'back'],
  ['FROMIMAGE', 'startAnimation'],
  ['OVERLAY', 'endAnimation'],
  ['OVERLAY', 'progress'],
  ['OVERLAY', 'back'],
  ['FROMOVERLAY', 'startAnimation']
]

// describe('Should return correct state', () => {
//
//   for (let states of statesActRes) {
//     const [init, act, res] = states;
//     test(`Should return correct state ${res}`, () => {
//       expect(transition(`${init}`, `${act}`)).toEqual(expect.arrayContaining(states));
//     })
//   }
//
//   for (let [init, act] of statesAct) {
//     test(`Should return undefined`, () => {
//       expect(transition(`${init}`, `${act}`)).toBeUndefined();
//     })
//   }
// });

describe('Should return correct state', () => {

  for (let states of statesActRes) {
    const [init, act, res] = states;
    test(`Should return correct state ${res}`, () => {
      expect(transition(`${init}`, `${act}`)).toMatch(res);
    })
  }

  for (let [init, act] of statesAct) {
    test(`Should return undefined`, () => {
      expect(transition(`${init}`, `${act}`)).toBeUndefined();
    })
  }
});
