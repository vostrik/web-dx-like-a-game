type MovePhase = "on_ground" | "in_air";

function animFor(phase: MovePhase) {
  return phase === "on_ground" ? "run" : "jump_loop";
}

