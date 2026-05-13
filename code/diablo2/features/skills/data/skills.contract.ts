export type Skill = {
  id: string;
  name: string;
  mana_cost: number;
};

export function parseSkills(raw: unknown): Skill[] {
  const rows = raw as Skill[];
  if (!Array.isArray(rows)) throw new Error("skills: not an array");
  return rows;
}


