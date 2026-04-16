import hrMasterclass from "@/assets/training-hr-masterclass.webp";

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
    id: "hr-masterclass-may-2026",
    title: "The Strategic HR Function & Talent Acquisition Masterclass",
    description:
      "Aligning workforce strategy with modern talent acquisition to drive measurable business impact.",
    date: "May 6–8, 2026",
    posterImage: hrMasterclass,
    whatsappLink: "https://wa.me/918884386913?text=Hello%20I%20am%20interested%20in%20the%20HR%20Masterclass",
  },
];
