import { Machine } from 'xstate';

const stateMachine = Machine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        SUBMIT: [
          {
            target: 'loading',
            cond: ({ state }) => state.name !== '' && state.card !== ''
          },
          {
            target: 'error'
          }
        ]
      }
    },
    loading: {
      entry: ['doPayment'],
      on: {
        ERROR: 'error',
        SUCCESS: 'success',
      }
    },
    error: {
      on: {
        SUBMIT: {
          target: 'loading',
          cond: ({ state }) => state.name !== '' && state.card !== ''
        }
      }
    },
    success: {
      on: {
        RESET: "idle"
      }
    }
  }
});

export default stateMachine;