import { setupWorker } from "msw/browser";
import { skills_handlers } from "./data/skills.mock";

export async function start_skills_msw() {
  await setupWorker(...skills_handlers).start({
    onUnhandledRequest: "bypass",
  });
}


