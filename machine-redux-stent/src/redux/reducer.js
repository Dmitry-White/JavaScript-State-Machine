import { LOGIN, LOGIN_SUCCESSFUL, LOGOUT, LOGIN_FAILED, TRY_AGAIN } from './types';

const initialState = {
  user: null,
  error: null,
  loading: false,
  credentials: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        requestInFlight: true,
        credentials: payload
      };
    case LOGIN_SUCCESSFUL:
      return {
        user: payload,
        error: null,
        requestInFlight: false,
        credentials: null
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: payload,
        requestInFlight: false
      };
    case LOGOUT:
      return initialState;
    case TRY_AGAIN:
      return {
        ...state,
        requestInFlight: true
      }
    default:
      return state;
  }
}

export default reducer;