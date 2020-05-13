const machine = {
  state: "idle",
  transitions: {
    idle: {
      click() {},
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
};
