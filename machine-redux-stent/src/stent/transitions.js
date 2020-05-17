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

const transitions = {
  [STATES.IDLE]: {
    [TRANSITIONS.SUBMIT]: submit
  },
  [STATES.LOADING]: {
    [TRANSITIONS.SUCCESS]: () => { },
    [TRANSITIONS.ERROR]: () => { },
  },
};

export default transitions;