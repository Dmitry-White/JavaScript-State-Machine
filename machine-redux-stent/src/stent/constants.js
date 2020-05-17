const STATES = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  RETRY: 'RETRY',
  SUCCESS: 'SUCCESS',
};

const TRANSITIONS = {
  SUBMIT: 'submit',
  SUCCESS: "success",
  ERROR: 'error',
  RETRY: 'retry',
  PROFILE: 'profile',
  LOGOUT: 'logout'
};

export {
  STATES,
  TRANSITIONS
}