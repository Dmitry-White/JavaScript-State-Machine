const createMachine = (stateMachineDefinition) => {
  const machine = {
    value: stateMachineDefinition.initialState,
    transition(currentState, event) {
      return this.value;
    },
  };
  return machine;
};

module.exports = createMachine;
