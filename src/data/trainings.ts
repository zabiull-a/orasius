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
  outcomes?: string[];
  highlights: string[];
  audience?: string[];
  trainer: {
    name: string;
    role: string;
    credentials: string[];
  };
  registerPath: string;
  detailsPath?: string;
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
  {
    id: "mastering-supply-chain-procurement-ai-dec-2026",
    title: "Mastering Supply Chain and Procurement Using AI",
    tagline:
      "Transforming AI & Procurement into strategic supply chain advantage, driving organizational value.",
    summary:
      "Turn AI and procurement into strategic supply chain advantage that drives organizational value.",
    description:
      "A live virtual executive certification for supply chain and procurement leaders. Learn how artificial intelligence is reshaping modern supply chain management and procurement, and how to transform AI capability and procurement practice into strategic supply chain advantage that drives measurable organizational value.",
    date: "2–4 December 2026",
    duration: "3 Days",
    format: "Live Virtual Training",
    certification: "Executive Certification",
    posterImage: "/images/supply-chain-training.jpeg",
    posterAlt:
      "Orasius Mastering Supply Chain and Procurement Using AI executive certification training poster",
    highlights: [
      "AI in Modern Supply Chain Management",
      "AI in Procurement",
      "Strategic Supply Chain Advantage",
      "Driving Organizational Value",
      "Live Virtual Training",
      "Executive Certification",
    ],
    trainer: {
      name: "ORASIUS Trainer",
      role: "Supply Chain & Procurement Specialist",
      credentials: [
        "Supply chain and procurement specialist",
        "Executive education facilitator",
      ],
    },
    registerPath: "/register",
    detailsPath: "/training/mastering-supply-chain-procurement-using-ai",
    whatsappLink:
      "https://wa.me/918884386913?text=Hello%2C%20I%20want%20to%20secure%20my%20seat%20for%20the%20Mastering%20Supply%20Chain%20and%20Procurement%20Using%20AI%20training%20(2-4%20December%202026)",
  },
];

export const getTrainingBySlug = (slug: string) =>
  ongoingTrainings.find((t) => t.detailsPath === `/training/${slug}`);
