const machine = {
  state: "idle",
  transitions: {
    idle: {
      click() {
        console.log("Clicked");
      },
    },
    fetching: {
      success() {},
      failure() {},
    },
    error: {
      retry() {},
    },
  },
  changeStateTo(state) {
    this.state = state;
  },
  dispatch(actionName, payload) {
    const actions = this.transitions[this.state];
    const action = actions[actionName];

    if (action) {
      action.apply(this, payload);
    }
  },
};
