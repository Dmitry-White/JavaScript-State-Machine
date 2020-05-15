import { Machine } from 'xstate';

const stateMachine = Machine({
  initial: 'idle',
  states: {
    idle: {},
    loading: {},
    error: {},
    success: {}
  }
});

export default stateMachine;