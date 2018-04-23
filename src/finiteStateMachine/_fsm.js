
const stateMachine = {
  'initialState': 'OVERLAY',
  'states': {
    'IMAGE': {'startAnimation': 'FROMIMAGE'},
    'OVERLAY': {'startAnimation': 'FROMOVERLAY'},
    'FROMOVERLAY': {'endAnimation': 'IMAGE', 'progress': 'FROMOVERLAY' },
    'FROMIMAGE': {'endAnimation': 'OVERLAY',  'progress': 'FROMIMAGE'},
  }
};

const stateMachine2 = {
  'initialState': 'OVERLAY',
  'states': {
    'IMAGE': 'FROMIMAGE',
    'OVERLAY': 'FROMOVERLAY',
    'FROMOVERLAY': 'IMAGE',
    'FROMIMAGE': 'OVERLAY'
  }
};

export default stateMachine;
