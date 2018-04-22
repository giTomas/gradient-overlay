
const initTransition = (machine) => {
return (uiState, action) => {
  if (typeof uiState !== 'string' && typeof action !== 'string') {
    throw new Error(`Key "${key}" is not string`);
  };

  const currentUiState = uiState;
  const nextUiState = machine[currentUiState][action];

  if (nextUiState) {
    console.log(`${currentUiState} + ${action} --> ${nextUiState}`);
    return  [ uiState, action, nextUiState ];
    }
  }
};

export default initTransition;
