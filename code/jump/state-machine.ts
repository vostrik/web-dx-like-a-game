import { createMachine } from "xstate";

const playerMachine = createMachine({
  id: "player",
  initial: "idle",
  states: {
    idle: { on: { JUMP: "jumping" } },
    jumping: { on: { LAND: "idle" } },
  },
});


console.log(playerMachine)
