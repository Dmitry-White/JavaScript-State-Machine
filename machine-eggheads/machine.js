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
  },
});
