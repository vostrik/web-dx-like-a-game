function tick(input: { up: boolean; grounded: boolean }) {
  if (input.up) {
    if (input.grounded) return "jump";
    return "air_jump";
  }
  return "idle";
}

