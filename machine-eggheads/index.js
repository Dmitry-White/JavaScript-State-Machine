const initialState = machine.value;
console.log(`current state: ${initialState}`); // current state: off

const onState = machine.transition(state, "switch");
console.log(`current state: ${onState}`); // current state: on

const offState = machine.transition(state, "switch");
console.log(`current state: ${offState}`); // current state: off
