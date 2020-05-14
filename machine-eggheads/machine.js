const machine = createMachine({
  initialState: "off",
  on: {
    actions: {
      onEnter() {
        console.log("on: onEnter");
      },
      onExit() {
        console.log("on: onExit");
      },
    },
    transitions: {
      switch: {
        target: "off",
        action() {
          console.log('transition action for "switch" in "on" state');
        },
      },
    },
  },
  off: {
    actions: {
      onEnter() {
        console.log("off: onEnter");
      },
      onExit() {
        console.log("off: onExit");
      },
    },
    transitions: {
      switch: {
        target: "on",
        action() {
          console.log('transition action for "switch" in "off" state');
        },
      },
    },
  },
});
