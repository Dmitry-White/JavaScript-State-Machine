const machine = {
  state: STATES.IDLE,
  transitions: {
    [STATES.IDLE]: {
      async [TRANSITIONS.CLICK](event) {
        console.log(`${TRANSITIONS.CLICK}`, event);
        this.changeStateTo(STATES.FETCHING);

        try {
          const res = await api.getData();
          const data = await res.json();
          this.dispatch(TRANSITIONS.SUCCESS, data);
        } catch (error) {
          this.dispatch(TRANSITIONS.FAILURE, error);
        }
      },
    },
    [STATES.FETCHING]: {
      [TRANSITIONS.SUCCESS](data) {
        console.log(`${TRANSITIONS.SUCCESS}`, data);
        // render the data
        this.changeStateTo(STATES.IDLE);
      },
      [TRANSITIONS.FAILURE](error) {
        console.log(`${TRANSITIONS.FAILURE}`, error);
        // render the error
        this.changeStateTo(STATES.ERROR);
      },
    },
    [STATES.ERROR]: {
      [TRANSITIONS.RETRY](event) {
        console.log(`${TRANSITIONS.RETRY}`, event);
        this.changeStateTo(STATES.IDLE);
        this.dispatch(TRANSITIONS.CLICK, event);
      },
    },
  },
  changeStateTo(state) {
    this.state = state;
  },
  dispatch(actionName, payload) {
    const actions = this.transitions[this.state];
    const action = actions[actionName];

    if (action) {
      action.apply(this, [payload]);
    }
  },
};
