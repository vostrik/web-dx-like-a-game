import { use_skills } from "../data/skills.hook";

export function SkillsPanel() {
  const { skills, is_pending, is_error, error } = use_skills();
  if (is_pending) return <p>Загрузка…</p>;
  if (is_error) return <p>{String(error)}</p>;
  if (!skills) return null;
  return (
    <ul>
      {skills.map((s) => (
        <li key={s.id}>
          {s.name} — {s.mana_cost} MP
        </li>
      ))}
    </ul>
  );
}


