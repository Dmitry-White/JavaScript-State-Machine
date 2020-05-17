import { takeLatest, call, put, select } from 'redux-saga/effects';

import Auth from '../services/Auth';

import { loginSuccessful, loginFailed } from './actions';
import { credentialsSelector } from './selectors';
import { LOGIN, TRY_AGAIN } from './types';

function* saga() {
  yield takeLatest([LOGIN, TRY_AGAIN], function* () {
    try {
      const credentials = yield select(credentialsSelector);
      const userData = yield call(Auth.login, credentials);
      yield put(loginSuccessful(userData));
    } catch (error) {
      yield put(loginFailed(error));
    }
  });
};

export default saga;