const STATES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: 'success'
};

const TRANSITIONS = {
  SUBMIT: 'submit',
  SUCCESS: "success",
  ERROR: 'error',
  RESET: "reset",
};

const ACTIONS = {
  DO_PAYMENT: 'doPayment'
}

export {
  STATES,
  TRANSITIONS,
  ACTIONS
}