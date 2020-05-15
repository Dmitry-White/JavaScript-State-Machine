import { Machine } from 'xstate';

import { STATES, TRANSITIONS, ACTIONS } from './constants';

const stateMachine = Machine({
  initial: STATES.IDLE,
  states: {
    [STATES.IDLE]: {
      on: {
        [TRANSITIONS.SUBMIT]: [
          {
            target: STATES.LOADING,
            cond: ({ state }) => state.name !== '' && state.card !== ''
          },
          {
            target: STATES.ERROR
          }
        ]
      }
    },
    [STATES.LOADING]: {
      entry: [ACTIONS.DO_PAYMENT],
      on: {
        [TRANSITIONS.ERROR]: STATES.ERROR,
        [TRANSITIONS.SUCCESS]: STATES.SUCCESS,
      }
    },
    [STATES.ERROR]: {
      on: {
        [TRANSITIONS.SUBMIT]: {
          target: STATES.LOADING,
          cond: ({ state }) => state.name !== '' && state.card !== ''
        }
      }
    },
    [STATES.SUCCESS]: {
      on: {
        [TRANSITIONS.RESET]: STATES.IDLE
      }
    }
  }
});

export default stateMachine;