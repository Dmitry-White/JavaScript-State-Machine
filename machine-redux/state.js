const machine = {
  state: "idle",
  transitions: {
    idle: {
      click() {
        console.log(this);
        this.changeStateTo("fetching");
        console.log(this);

        api
          .getData()
          .then((res) => {
            try {
              const data = JSON.parse(res);
              this.dispatch("success", data);
            } catch (error) {
              this.dispatch("failure", error);
            }
          })
          .catch((error) => this.dispatch("failure", error));
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
