import stateMachine from './_fsm';
import initTransition from './_transition';

const transition = initTransition(stateMachine.states);
const {initialState} = stateMachine;

export {initialState, transition};
