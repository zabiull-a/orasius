export interface Program {
  id: string;
  title: string;
  category: string;
  overview: string;
  objectives: string[];
  format: string;
  duration: string;
  certification: string;
  status: "Upcoming" | "Ongoing" | "Past";
}

export const programCategories = [
  "Leadership",
  "HR",
  "Technology",
  "Finance",
  "Supply Chain",
  "Health & Safety",
  "Risk Management",
  "Professional Development",
] as const;

export const programs: Program[] = [
  {
    id: "strategic-leadership",
    title: "Strategic Leadership for Senior Managers",
    category: "Leadership",
    overview: "An advanced program designed for senior managers seeking to elevate their strategic thinking and leadership capabilities in complex, global business environments.",
    objectives: [
      "Develop strategic decision-making frameworks",
      "Lead cross-functional and cross-cultural teams",
      "Drive organizational transformation and change",
      "Build resilient leadership practices",
    ],
    format: "Instructor-led (In-person & Virtual)",
    duration: "5 Days",
    certification: "Aligned with ILM Level 7",
    status: "Upcoming",
  },
  {
    id: "hr-business-partnering",
    title: "HR Business Partnering & People Strategy",
    category: "HR",
    overview: "A comprehensive program for HR professionals aiming to transition into strategic business partnering roles and drive people-focused organizational outcomes.",
    objectives: [
      "Align HR strategies with business objectives",
      "Build effective stakeholder relationships",
      "Leverage people analytics for decision-making",
      "Design talent management frameworks",
    ],
    format: "Blended (Virtual + Workshop)",
    duration: "4 Days",
    certification: "Aligned with CIPD Standards",
    status: "Upcoming",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation & Emerging Technologies",
    category: "Technology",
    overview: "Explore the technologies reshaping industries and learn to lead digital transformation initiatives within your organization.",
    objectives: [
      "Understand AI, cloud computing, and IoT applications",
      "Develop digital transformation roadmaps",
      "Manage technology-driven change",
      "Assess and mitigate digital risks",
    ],
    format: "Virtual Instructor-led",
    duration: "3 Days",
    certification: "CPD Accredited",
    status: "Ongoing",
  },
  {
    id: "financial-analysis",
    title: "Financial Analysis & Business Decision-Making",
    category: "Finance",
    overview: "Strengthen financial literacy and analytical skills to make informed business decisions and communicate financial insights effectively.",
    objectives: [
      "Interpret financial statements and reports",
      "Apply financial modelling techniques",
      "Evaluate investment and budgeting decisions",
      "Communicate financial insights to stakeholders",
    ],
    format: "Instructor-led (In-person)",
    duration: "4 Days",
    certification: "Aligned with CFA Institute Standards",
    status: "Upcoming",
  },
  {
    id: "supply-chain-resilience",
    title: "Supply Chain Resilience & Operations Excellence",
    category: "Supply Chain",
    overview: "Build resilient supply chains and optimize operations to navigate disruptions and drive efficiency in a globalized economy.",
    objectives: [
      "Design resilient supply chain strategies",
      "Implement lean and agile methodologies",
      "Leverage technology for supply chain visibility",
      "Manage supplier relationships effectively",
    ],
    format: "Blended (In-person + Virtual)",
    duration: "5 Days",
    certification: "Aligned with APICS/ASCM Standards",
    status: "Upcoming",
  },
  {
    id: "occupational-health-safety",
    title: "Occupational Health & Safety Management",
    category: "Health & Safety",
    overview: "A practical program for safety professionals and managers responsible for creating and maintaining safe workplace environments across industries.",
    objectives: [
      "Implement effective health and safety management systems",
      "Conduct risk assessments and hazard identification",
      "Ensure compliance with international safety standards",
      "Foster a culture of workplace safety",
    ],
    format: "Instructor-led (In-person)",
    duration: "5 Days",
    certification: "Aligned with NEBOSH Standards",
    status: "Upcoming",
  },
  {
    id: "enterprise-risk-management",
    title: "Enterprise Risk Management & Governance",
    category: "Risk Management",
    overview: "Develop a comprehensive understanding of enterprise risk management frameworks and governance practices to protect and create organizational value.",
    objectives: [
      "Establish enterprise-wide risk management frameworks",
      "Identify, assess, and mitigate strategic risks",
      "Integrate risk management into corporate governance",
      "Develop risk reporting and communication strategies",
    ],
    format: "Virtual Instructor-led",
    duration: "3 Days",
    certification: "Aligned with ISO 31000",
    status: "Ongoing",
  },
  {
    id: "professional-communication",
    title: "Professional Communication & Executive Presence",
    category: "Professional Development",
    overview: "Enhance your professional communication skills and executive presence to influence, negotiate, and lead with confidence in any business setting.",
    objectives: [
      "Master persuasive communication techniques",
      "Develop executive presence and personal branding",
      "Navigate difficult conversations with confidence",
      "Present ideas compellingly to diverse audiences",
    ],
    format: "Blended (Virtual + Coaching)",
    duration: "3 Days",
    certification: "CPD Accredited",
    status: "Upcoming",
  },
];
