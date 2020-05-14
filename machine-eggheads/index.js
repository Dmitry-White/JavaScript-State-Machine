const machine = require("./machine");

const initialState = machine.value;
console.log(`current state: ${initialState}`); // current state: off

const onState = machine.transition(initialState, "switch");
console.log(`current state: ${onState}`); // current state: on

const offState = machine.transition(onState, "switch");
console.log(`current state: ${offState}`); // current state: off
