// 1) Core: only mechanics without view
//    Ядро: только логика без отображения
const damage = (hp: number, x: number) => Math.max(0, hp - x);

// 2) Data: Contract-based + Mocks by design
//    Данные: Контракт + Mocks by design
const rows = (mock: boolean) => mock 
  ? [{ id: "m1" }]
  : await api("/rows", parseRows);

// 3) Business logic: Rules through DSL
//    Бизнес-логика: Правила как DSL
const decision = getRule(
  dsl: [
    { when: { role: 'admin' }, then: { action: 'publish', state: 'draft' } },
    { when: { role: 'stuff' }, then: { action: 'publish', state: 'review' } },
  ], ctx
);

// 4) Event-driven: event → state; streaming + eventually consistent
//    Событийная модель: событие → состояние; поток + конечная согласованность
const next = transition(state, { event: "JUMP" });

// 5) Expert context: Skills + Agents → A2UI
//    Экспертный контекст: Skills + Агенты → A2UI (по спецификации)
const ui = await agent.run("layout_skill", a2uiSpec);


