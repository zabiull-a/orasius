import hrMasterclass from "@/assets/training-hr-masterclass.png";

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
    whatsappLink: "https://wa.me/8884386913",
  },
];
