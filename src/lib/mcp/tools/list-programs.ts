import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { programs, programCategories } from "../../../data/programs";

export default defineTool({
  name: "list_programs",
  title: "List training programs",
  description:
    "List ORASIUS corporate training programs. Optionally filter by category or status.",
  inputSchema: {
    category: z
      .enum(programCategories as unknown as [string, ...string[]])
      .optional()
      .describe("Filter by program category."),
    status: z
      .enum(["Upcoming", "Ongoing", "Past"])
      .optional()
      .describe("Filter by program status."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, status }) => {
    const items = programs
      .filter((p) => (category ? p.category === category : true))
      .filter((p) => (status ? p.status === status : true))
      .map(({ id, title, category, duration, format, status }) => ({
        id,
        title,
        category,
        duration,
        format,
        status,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { programs: items, count: items.length },
    };
  },
});
