import React from 'react';
import { connect } from 'react-redux';

import { loadingSelector, userSelector, errorSelector, userNameSelector, errorMessageSelector } from '../redux/selectors';
import { login, tryAgain, logout } from '../redux/actions';
import { CONNECTION_ERROR } from '../core/constants';

import Profile from './Profile';
import Error from './Error';
import LoginForm from './LoginForm';

class Widget extends React.Component {
  render() {
    const {
      isLoading,
      isSuccess,
      isError,
      isConnectionError,
      name,
      login,
      tryAgain,
      logout
    } = this.props;

    if (isLoading) {
      return <p className='tac'>Loading. please wait.</p>;
    } else if (isSuccess) {
      return <Profile name={name} logout={logout} />;
    } else if (isError) {
      return isConnectionError ?
        <Error
          tryAgain={tryAgain}
          message='Connection problem!' /> :
        (<div>
          <LoginForm submit={login} />
          <p className='error'>Missing or invalid data.</p>
        </div>)
    }
    return <LoginForm submit={login} />;
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