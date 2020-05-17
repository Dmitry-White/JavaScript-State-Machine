import { Machine } from 'stent';

import { STATES } from './constants';

import transitions from './transitions';

const InitialState = { name: STATES.IDLE };
const machine = Machine.create(
  'LoginFormSM',
  { state: InitialState, transitions }
);

export default machine;