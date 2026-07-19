import { defineMcp } from "@lovable.dev/mcp-js";
import listProgramsTool from "./tools/list-programs";
import getProgramTool from "./tools/get-program";
import listOngoingTrainingsTool from "./tools/list-ongoing-trainings";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "orasius-mcp",
  title: "ORASIUS Corporate Training",
  version: "0.1.0",
  instructions:
    "Tools for ORASIUS, a multi-industry corporate training and professional development provider. Use `list_programs` and `get_program` to browse training catalog, `list_ongoing_trainings` for currently scheduled sessions, and `get_contact_info` for enquiry channels.",
  tools: [listProgramsTool, getProgramTool, listOngoingTrainingsTool, getContactInfoTool],
});
