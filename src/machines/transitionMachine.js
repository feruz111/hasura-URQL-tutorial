import { createMachine } from "xstate";
import { assign } from "xstate";

export const transitionMachine = createMachine({
  id: "initMachine",
  initial: "initState",
  context: {
    data: [],
  },
  states: {
    initState: {
      on: { TOGGLE: "modifyingState" },
    },
    modifyingState: {
      on: { TOGGLE: "initState" },
    },
  },
});
