import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { buildLlmsTxt } from "@/data/llms";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const body = buildLlmsTxt();
        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
