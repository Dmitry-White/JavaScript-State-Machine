import React from 'react';
import { connect } from 'stent/lib/react';

import { submitSelector, retrySelector, logoutSelector, stateSelector } from '../stent/selectors';

class Widget extends React.Component {
  render() {
    return null
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