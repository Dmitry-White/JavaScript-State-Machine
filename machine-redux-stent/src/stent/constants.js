const STATES = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  TRY_AGAIN: 'TRY_AGAIN',
  SUCCESS: 'SUCCESS',
};

const TRANSITIONS = {
  SUBMIT: 'submit',
  SUCCESS: "success",
  ERROR: 'error',
  TRY_AGAIN: "try again",
  PROFILE: 'profile',
  LOGOUT: 'logout'
};

export {
  STATES,
  TRANSITIONS
}