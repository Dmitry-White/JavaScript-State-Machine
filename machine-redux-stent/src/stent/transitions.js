import { call } from 'stent/lib/helpers';

import Auth from '../services/Auth';

import { CONNECTION_ERROR, VALIDATION_ERROR } from '../core/constants';
import { STATES, TRANSITIONS } from './constants';

const submit = function* (state, credentials) {
  yield STATES.LOADING;
  try {
    const user = yield call(Auth.login, credentials);

    this[TRANSITIONS.SUCCESS](user);
  } catch (error) {
    this[TRANSITIONS.ERROR](error, credentials);
  }
};

const success = function (state, user) {
  return { name: STATES.SUCCESS, user };
};

const error = function (state, error, credentials) {
  return error.message === CONNECTION_ERROR ?
    { name: STATES.TRY_AGAIN, credentials } :
    { name: STATES.ERROR, error };
};

const tryAgain = function* (state) {
  yield call(submit, state, state.credentials);
}

const transitions = {
  [STATES.IDLE]: {
    [TRANSITIONS.SUBMIT]: submit
  },
  [STATES.LOADING]: {
    [TRANSITIONS.SUCCESS]: success,
    [TRANSITIONS.ERROR]: error,
  },
  [STATES.TRY_AGAIN]: {
    [TRANSITIONS.TRY_AGAIN]: tryAgain
  },
  [STATES.ERROR]: {
    [TRANSITIONS.SUBMIT]: submit
  },
  [STATES.SUCCESS]: {
    [TRANSITIONS.PROFILE]: () => { },
    [TRANSITIONS.LOGOUT]: STATES.IDLE
  }
};

export default transitions;