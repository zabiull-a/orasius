export interface Training {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  date: string;
  duration: string;
  format: string;
  certification: string;
  posterImage: string;
  posterAlt: string;
  outcomes: string[];
  highlights: string[];
  audience: string[];
  trainer: {
    name: string;
    role: string;
    credentials: string[];
  };
  registerPath: string;
  whatsappLink: string;
  brochureLink?: string;
}

export const ongoingTrainings: Training[] = [
  {
    id: "advanced-ifrs-nov-2026",
    title: "Advanced IFRS: AI-Powered Consolidation & Sustainability Metrics",
    tagline:
      "Turn complex compliance into strategic business advantage.",
    summary:
      "Master advanced IFRS frameworks through real-world consolidation and sustainability reporting.",
    description:
      "A live virtual executive certification for finance leaders working at the sharp end of IFRS. Master advanced IFRS frameworks through real-world application, apply AI to group consolidation, and report sustainability metrics with confidence — turning complex compliance into strategic business advantage.",
    date: "17–20 November 2026",
    duration: "3 Days",
    format: "Live Virtual Training",
    certification: "Executive Certification",
    posterImage: "/images/advanced-ifrs-training.png",
    posterAlt:
      "Orasius Advanced IFRS AI-Powered Consolidation and Sustainability Metrics executive certification training poster",
    outcomes: [
      "Apply advanced IFRS frameworks to real-world reporting scenarios.",
      "Prepare and review group consolidation with greater accuracy.",
      "Use AI tools to streamline consolidation and disclosure workflows.",
      "Interpret and report sustainability metrics under current standards.",
      "Translate compliance requirements into strategic business insight.",
    ],
    highlights: [
      "Advanced IFRS Frameworks",
      "Group Consolidation",
      "AI-Powered Reporting Workflows",
      "Sustainability Metrics & Disclosure",
      "Real-World Application & Case Work",
      "36 CPD Points",
      "Study Materials Included",
    ],
    audience: [
      "Finance Directors and CFOs",
      "Financial Controllers",
      "Group and Consolidation Accountants",
      "Audit and Assurance Professionals",
      "Sustainability and ESG Reporting Professionals",
    ],
    trainer: {
      name: "ORASIUS Trainer",
      role: "IFRS & Corporate Reporting Specialist",
      credentials: [
        "Advanced IFRS and consolidation specialist",
        "Extensive international corporate reporting experience",
      ],
    },
    registerPath: "/register",
    whatsappLink:
      "https://wa.me/918884386913?text=Hello%2C%20I%20want%20to%20secure%20my%20seat%20for%20the%20Advanced%20IFRS%20training%20(17-20%20November%202026)",
  },
];
