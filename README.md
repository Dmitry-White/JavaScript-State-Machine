## The Rise Of The State Machines

https://www.smashingmagazine.com/2018/01/rise-state-machines/

## Implementing a simple state machine library in JavaScript

https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript

## A Complete Introduction to State Machines in JavaScript

https://jonbellah.com/articles/intro-state-machines/


### Redux vs XState
- Redux is essentially a state container where events (called actions in Redux) are sent to a reducer which update state.
- XState is also a state container, but it separates finite state (e.g., "loading", "success") from "infinite state", or context (e.g., items: [...]).
- Redux does not dictate how you define your reducers. They are plain functions that return the next state given the current state and event (action).
- XState is a "reducer with rules" - you define legal transitions between finite states due to events, and also which actions should be executed in a transition (or on entry/exit from a state)
- Redux does not have a built-in way to handle side-effects. There are many community options, like redux-thunk, redux-saga, etc.
- XState makes actions (side-effects) declarative and explicit - they are part of the State object that is returned on each transition (current state + event).
- Redux currently has no way to visualize transitions between states, since it does not discern between finite and infinite state.
- XState has a visualizer: https://statecharts.github.io/xstate-viz which is feasible due to the declarative nature.
- The implicit logic/behavior represented in Redux reducers can't be serialized declaratively (e.g., in JSON)
- XState's machine definitions, which represent logic/behavior, can be serialized to JSON, and read from JSON. This makes behavior very portable and configurable by external tools.
- Redux is not strictly a state machine.
- XState adheres strictly to the W3C SCXML specification: https://www.w3.org/TR/scxml/
- Redux relies on the developer to manually prevent impossible states.
- XState uses statecharts to naturally define boundaries for handling events, which prevents impossible states and can be statically analyzed.
- Redux encourages the use of a single, "global" atomic store.
- XState encourages the use of an Actor-model-like approach, where there can be many hierarchical statechart/"service" instances that communicate with each other.
