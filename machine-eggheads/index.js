const machine = require("./machine");
const { TRANSITIONS } = require("./constants");

const initialState = machine.value;
console.log(`current state: ${initialState}`); // current state: off

const onState = machine.transition(initialState, TRANSITIONS.SWITCH);
console.log(`current state: ${onState}`); // current state: on

const offState = machine.transition(onState, TRANSITIONS.SWITCH);
console.log(`current state: ${offState}`); // current state: off
