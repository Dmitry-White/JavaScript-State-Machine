import React from 'react';
import { connect } from 'react-redux';

import { loadingSelector, userSelector, errorSelector, userNameSelector, errorMessageSelector } from '../redux/selectors';
import { login, tryAgain, logout } from '../redux/actions';
import { CONNECTION_ERROR } from '../core/constants';

class Widget extends React.Component {
  render() {

  }
}

const mapStateToProps = state => ({
  isLoading: loadingSelector(state),
  isSuccess: userSelector(state) !== null,
  isError: errorSelector(state) !== null,
  name: userSelector(state) ? userNameSelector(state) : null,
  isConnectionError: errorSelector(state) && errorMessageSelector(state) === CONNECTION_ERROR
});

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(login(credentials)),
  tryAgain: () => dispatch(tryAgain()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Widget);