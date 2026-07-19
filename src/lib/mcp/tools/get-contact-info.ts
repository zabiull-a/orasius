import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get ORASIUS contact info",
  description: "Return ORASIUS contact details: email, phone, and WhatsApp.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      company: "ORASIUS",
      email: "info@orasius.com",
      phone: "+1 786 2436792",
      whatsapp: "+91 8884386913",
      whatsappLink: "https://wa.me/918884386913",
      website: "https://orasius.com",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
