import { call } from 'stent/lib/helpers';

import Auth from '../services/Auth';
import { CONNECTION_ERROR } from '../core/constants';

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
    { name: STATES.RETRY, credentials } :
    { name: STATES.ERROR, error };
};

const retry = function* (state) {
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
  [STATES.RETRY]: {
    [TRANSITIONS.RETRY]: retry
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