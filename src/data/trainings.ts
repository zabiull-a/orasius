import businessWritingPoster from "@/assets/training-business-writing-ai.webp.asset.json";

export interface Training {
  id: string;
  title: string;
  description: string;
  date: string;
  posterImage: string;
  whatsappLink: string;
  brochureLink?: string;
}

export const ongoingTrainings: Training[] = [
  {
    id: "business-writing-ai-jul-2026",
    title: "Certification in Advanced Business Writing Using AI",
    description:
      "Write like a leader. Use AI like a professional. Master executive reports, proposals, policies and strategic communication using AI.",
    date: "30 July 2026",
    posterImage: businessWritingPoster.url,
    whatsappLink:
      "https://wa.me/918884386913?text=Hello%2C%20I%20want%20to%20secure%20my%20seat%20for%20the%20Advanced%20Business%20Writing%20Using%20AI%20certification",
  },
];
