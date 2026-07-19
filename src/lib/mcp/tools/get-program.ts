import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { programs } from "../../../data/programs";

export default defineTool({
  name: "get_program",
  title: "Get program details",
  description:
    "Fetch full details of a single ORASIUS training program by id (e.g. 'strategic-leadership').",
  inputSchema: {
    id: z.string().min(1).describe("The program id."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const program = programs.find((p) => p.id === id);
    if (!program) {
      return {
        content: [{ type: "text", text: `No program found with id "${id}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(program, null, 2) }],
      structuredContent: { program },
    };
  },
});
