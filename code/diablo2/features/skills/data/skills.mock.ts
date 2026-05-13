import { http, HttpResponse } from "msw";

export const skills_handlers = [
  http.get("/api/skills", () =>
    HttpResponse.json([
      { id: "fireball", name: "Огненный шар", mana_cost: 8 },
      { id: "frost", name: "Ледяная стрела", mana_cost: 5 },
    ]),
  ),
];


