
const stateMachine = {
  'initialState': 'OVERLAY',
  'states': {
    'IMAGE': {
      'startAnimation': 'FROMIMAGE'
    },
    'OVERLAY': {
      'startAnimation': 'FROMOVERLAY'
    },
    'FROMOVERLAY': {
      'endAnimation': 'IMAGE',
      'progress': 'FROMOVERLAY',
      'back': 'OVERLAY'
     },
    'FROMIMAGE': {
      'endAnimation': 'OVERLAY',
      'progress': 'FROMIMAGE',
      'back': 'IMAGE' 
    },
  }
};

// const stateMachine2 = {
//   'initialState': 'OVERLAY',
//   'states': {
//     'IMAGE': 'FROMIMAGE',
//     'OVERLAY': 'FROMOVERLAY',
//     'FROMOVERLAY': 'IMAGE',
//     'FROMIMAGE': 'OVERLAY'
//   }
// };

export default stateMachine;
