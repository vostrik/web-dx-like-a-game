import { useQuery } from '@tanstack/react-query';
import { parseSkills, type Skill } from './skills.contract';

async function fetch_skills(): Promise<Skill[]> {
  const res = await fetch('/api/skills');
  if (!res.ok) throw new Error('skills_http');
  return parseSkills(await res.json());
}

export function use_skills() {
  const q = useQuery({ queryKey: ['skills'], queryFn: fetch_skills });
  return {
    skills: q.data,
    is_pending: q.isPending,
    is_error: q.isError,
    error: q.error,
  };
}


