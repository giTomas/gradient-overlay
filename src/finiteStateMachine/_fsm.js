
const stateMachine = {
  'initialState': 'OVERLAY',
  'states': {
    'IMAGE': {'startAnimation': 'FROMIMAGE'},
    'OVERLAY': {'startAnimation': 'FROMOVERLAY'},
    'FROMOVERLAY': {'endAnimation': 'IMAGE' },
    'FROMIMAGE': {'endAnimation': 'OVERLAY'},
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
