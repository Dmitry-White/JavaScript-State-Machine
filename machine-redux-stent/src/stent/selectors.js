import { TRANSITIONS } from './constants';

const submitSelector = (machine) => machine[TRANSITIONS.SUBMIT];
const retrySelector = (machine) => machine[TRANSITIONS.RETRY];
const logoutSelector = (machine) => machine[TRANSITIONS.LOGOUT];
const stateSelector = (machine) => machine.state.name;

export {
  submitSelector,
  retrySelector,
  logoutSelector,
  stateSelector,
}