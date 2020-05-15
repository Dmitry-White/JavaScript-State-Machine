import React, { Component } from 'react';

import { fakePayment } from './utils';
import stateMachine from './machine';
import { STATES, TRANSITIONS, ACTIONS } from './constants';

import './App.css';

class App extends Component {
  state = {
    machine: {},
    msg: '',
    name: '',
    card: ''
  }
  componentDidMount() {
    this.setState({
      machine: stateMachine.initialState
    });
  };

  [ACTIONS.DO_PAYMENT] = () => {
    return fakePayment()
      .then(msg => this.transition(TRANSITIONS.SUCCESS, { msg }))
      .catch(msg => this.transition(TRANSITIONS.ERROR, { msg }));
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

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.transition(TRANSITIONS.SUBMIT);
  };

  getLoadingMessage = () => {
    const { machine } = this.state;
    return machine.value === STATES.LOADING ? (
      <div className="alert loading">
        loading...
      </div>
    ) : null
  }

  getErrorMessage = () => {
    const { machine, msg } = this.state;
    return machine.value === STATES.ERROR ? (
      <div className="alert error">
        {msg ? msg : "You must fill out all the form fields."}
      </div>
    ) : null
  }

  getSuccessMessage = () => {
    const { machine, msg } = this.state;
    return machine.value === STATES.SUCCESS ? (
      <div className="alert success">{msg ? msg : null}</div>
    ) : null
  }

  getResetButton = () => {
    const { machine } = this.state;
    return machine.value === STATES.SUCCESS ? (
      <button
        id="ResetButton"
        className="btn-reset"
        type="button"
        onClick={() => this.transition(TRANSITIONS.RESET)}
      >
        Reset
      </button>
    ) : null
  }

  render() {
    const { machine } = this.state;

    return (
      <div>
        <div className="pill-container">
          <div className="state-pill">current state: {machine.value}</div>
        </div>

        <div className="form-container">
          <div className="form-header">
            <h2>State Machine Payment Form</h2>
          </div>

          {this.getErrorMessage()}
          {this.getLoadingMessage()}
          {this.getSuccessMessage()}

          <div className="form-body">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="NameOnCard">Name on card</label>
                <input
                  id="NameOnCard"
                  name="name"
                  className="form-control"
                  type="text"
                  maxLength="255"
                  value={this.state.name}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CreditCardNumber">Card number</label>
                <input
                  id="CreditCardNumber"
                  name="card"
                  className="null card-image form-control"
                  type="text"
                  value={this.state.card}
                  onChange={this.handleInput}
                />
              </div>
              <button id="PayButton" className="btn-success" type="submit">
                Pay Now
              </button>
            </form>
          </div>
        </div>

        {this.getResetButton()}
      </div>
    );
  };
}

export default App;
