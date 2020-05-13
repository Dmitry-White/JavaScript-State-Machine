const machine = {
  state: "idle",
  transitions: {
    idle: {
      async click() {
        console.log("Click");
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
        // render the data
        this.changeStateTo("idle");
      },
      failure(error) {
        console.log("Failure: ", error);
        // render the error
        this.changeStateTo("error");
      },
    },
    error: {
      retry() {
        this.changeStateTo("idle");
        this.dispatch("click");
      },
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
