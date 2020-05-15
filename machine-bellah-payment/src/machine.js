import { Machine } from 'xstate';

const stateMachine = Machine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        SUBMIT: 'loading'
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
        SUBMIT: 'loading'
      }
    },
    success: {
      type: 'final'
    }
  }
});

export default stateMachine;