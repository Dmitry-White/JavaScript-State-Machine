import { LOGIN, LOGIN_SUCCESSFUL, LOGOUT, LOGIN_FAILED, TRY_AGAIN } from './types';

const login = credentials => ({ type: LOGIN, payload: credentials });
const loginSuccessful = userData => ({ type: LOGIN_SUCCESSFUL, payload: userData });
const logout = () => ({ type: LOGOUT });
const loginFailed = error => ({ type: LOGIN_FAILED, payload: error });
const tryAgain = () => ({ type: TRY_AGAIN });

export {
  login,
  loginSuccessful,
  logout,
  loginFailed,
  tryAgain
}