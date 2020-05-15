import React, { Component } from 'react';

import { fakePayment } from './utils';
import stateMachine from './machine';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.setState({
      machine: stateMachine.initialState
    });
  };

  doPayment = () => {
    return fakePayment()
      .then(msg => this.transition('SUCCESS', { msg }))
      .catch(msg => this.transition('ERROR', { msg }));
  }

  runActions = (state) => {
    if (state.actions.length > 0) {
      state.actions.forEach(f => this[f]());
    }
  }

  transition = (eventType, extState) => {
    const newState = stateMachine.transition(
      this.state.machine.value,
      eventType,
      {
        state: this.state
      }
    );

    this.runActions(newState);

    this.setState({
      machine: newState,
      msg: extState && extState.msg ? extState.msg : ""
    });
  };

  render() {
    return (
      <div className="form-container">
        <div className="form-header">
          <h2>State Machine Payment Form</h2>
        </div>

        <div className="form-body">
          <form>
            <div className="form-group">
              <label htmlFor="NameOnCard">Name on card</label>
              <input
                id="NameOnCard"
                className="form-control"
                type="text"
                maxLength="255"
              />
            </div>
            <div className="form-group">
              <label htmlFor="CreditCardNumber">Card number</label>
              <input
                id="CreditCardNumber"
                className="null card-image form-control"
                type="text"
              />
            </div>
            <button
              id="PayButton"
              className="btn btn-block btn-success submit-button"
              type="submit"
            >
              <span className="submit-button-lock" />
              <span className="align-middle">Pay Now</span>
            </button>
          </form>
        </div>
      </div>
    );
  };
}

export default App;
