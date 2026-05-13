const transitions: Record<string, Record<string, string>> = {
  idle: { JUMP: "jumping", _: "idle" },
  jumping: { LAND: "idle", _: "jumping" },
};

function go(state: string, event: string) {
  const row = transitions[state] ?? {};
  return row[event] ?? row._ ?? state;
}

