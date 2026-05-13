import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SkillsPanel } from "./features/skills/components/SkillsPanel";

const use_msw =
  import.meta.env.DEV && import.meta.env.VITE_USE_MSW === "true";

async function boot() {
  if (use_msw) {
    const { start_skills_msw } = await import("./features/skills/mock-skills");
    await start_skills_msw();
  }

  const query_client = new QueryClient();

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={query_client}>
        <SkillsPanel />
      </QueryClientProvider>
    </StrictMode>,
  );
}

boot().catch(console.error);



