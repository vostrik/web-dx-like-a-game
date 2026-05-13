type TState = "idle" | "jumping";
type TEvent = "JUMP" | "LAND";

function playerReducer(state: TState, event: TEvent): TState {
  if (state === "idle" && event === "JUMP") return "jumping";
  if (state === "jumping" && event === "LAND") return "idle";
  return state;
}

