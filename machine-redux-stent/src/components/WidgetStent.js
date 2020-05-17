import React from 'react';
import { connect } from 'stent/lib/react';

import { submitSelector, retrySelector, logoutSelector, stateSelector } from '../stent/selectors';
import { STATES } from '../stent/constants';

import Profile from './Profile';
import Error from './Error';
import LoginForm from './LoginForm';

class Widget extends React.Component {
  renderMap = {
    [STATES.IDLE]: <LoginForm submit={this.props.login} />,
    [STATES.LOADING]: <p className='tac'>Loading. please wait.</p>,
    [STATES.ERROR]: (
      <div>
        <LoginForm submit={this.props.login} />
        <p className='error'>Missing or invalid data.</p>
      </div>
    ),
    [STATES.SUCCESS]: <Profile name={this.props.name} logout={this.props.logout} />,
    [STATES.RETRY]: <Error tryAgain={this.props.tryAgain} message='Connection problem!' />,
  };

  render() {
    return this.renderMap[this.props.state];
  }
}

export default connect(Widget)
  .with('LoginFormSM')
  .map(machine => ({
    login: submitSelector(machine),
    retry: retrySelector(machine),
    logout: logoutSelector(machine),
    state: stateSelector(machine)
  }));