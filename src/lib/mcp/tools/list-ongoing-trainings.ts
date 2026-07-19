import { defineTool } from "@lovable.dev/mcp-js";
import { ongoingTrainings } from "../../../data/trainings";

export default defineTool({
  name: "list_ongoing_trainings",
  title: "List ongoing trainings",
  description:
    "List currently running and upcoming ORASIUS training sessions with dates and booking links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ongoingTrainings, null, 2) }],
    structuredContent: { trainings: ongoingTrainings, count: ongoingTrainings.length },
  }),
});
