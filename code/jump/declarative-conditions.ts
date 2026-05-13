function tick(input: { up: boolean; grounded: boolean }) {
  const rules: { when: boolean; then: string }[] = [
    { when: input.up && input.grounded, then: "jump" },
    { when: input.up, then: "air_jump" },
    { when: true, then: "idle" },
  ];
  const next = rules.find((r) => r.when)!.then;

  return next;
}



