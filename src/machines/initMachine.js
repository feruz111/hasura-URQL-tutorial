import { createMachine } from "xstate";
import { assign } from "xstate";

export const machine = createMachine({
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
