const createMachine = require("./factory");
const { STATES, TRANSITIONS } = require("./constants");

const machine = createMachine({
  initialState: STATES.OFF,
  [STATES.ON]: {
    actions: {
      onEnter() {
        console.log(`${STATES.ON}: onEnter`);
      },
      onExit() {
        console.log(`${STATES.ON}: onExit`);
      },
    },
    transitions: {
      [TRANSITIONS.SWITCH]: {
        target: STATES.OFF,
        action() {
          console.log(
            `transition action for "${TRANSITIONS.SWITCH}" in "${STATES.ON}" state`
          );
        },
      },
    },
  },
  [STATES.OFF]: {
    actions: {
      onEnter() {
        console.log(`${STATES.OFF}: onEnter`);
      },
      onExit() {
        console.log(`${STATES.OFF}: onExit`);
      },
    },
    transitions: {
      [TRANSITIONS.SWITCH]: {
        target: STATES.ON,
        action() {
          console.log(
            `transition action for "${TRANSITIONS.SWITCH}" in "${STATES.OFF}" state`
          );
        },
      },
    },
  },
});

module.exports = machine;
