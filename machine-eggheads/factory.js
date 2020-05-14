const createMachine = (stateMachineDefinition) => {
  const machine = {
    value: stateMachineDefinition.initialState,
    transition(currentState, event) {
      const currentStateDefinition = stateMachineDefinition[currentState];
      const destinationTransition = currentStateDefinition.transitions[event];

      if (!destinationTransition) {
        return;
      }

      const destinationState = destinationTransition.target;
      const destinationStateDefinition =
        stateMachineDefinition[destinationState];

      currentStateDefinition.actions.onExit();
      destinationTransition.action();
      destinationStateDefinition.actions.onEnter();

      this.value = destinationState;

      return this.value;
    },
  };
  return machine;
};

module.exports = createMachine;
