const machine = {
  state: "idle",
  transitions: {
    idle: {
      async click() {
        this.changeStateTo("fetching");

        try {
          const res = await api.getData();
          const data = await res.json();
          this.dispatch("success", data);
        } catch (error) {
          this.dispatch("failure", error);
        }
      },
    },
    fetching: {
      success(data) {
        console.log("Success: ", data);
      },
      failure(error) {
        console.log("Failure: ", error);
      },
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
    console.log("Payload: ", payload);

    if (action) {
      action.apply(this, payload);
    }
  },
};
