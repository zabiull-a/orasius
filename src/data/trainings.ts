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
    id: "certified-succession-planning-oct-2026",
    title: "Certified in Succession Planning",
    tagline: "Lead today. Build tomorrow. Plan succession.",
    summary:
      "Build a practical succession framework and secure leadership continuity.",
    description:
      "A live virtual executive certification that helps organisations effectively plan the transition of key personnel and leadership to ensure continuity. Build a practical succession framework, identify and develop high-potential talent, and strengthen leadership continuity and organisational readiness.",
    date: "6–9 October 2026",
    duration: "4 Days",
    format: "Live Virtual Training",
    certification: "Executive Certification",
    posterImage: "/images/succession-planning-training.png",
    posterAlt:
      "Orasius Certified in Succession Planning executive certification training poster",
    outcomes: [
      "Understand the key components of a succession plan.",
      "Identify the key skills required for a succession planning strategy.",
      "Develop succession planning and management approaches.",
      "Identify and develop high-potential talent.",
      "Understand the relationship between performance management and succession processes.",
      "Use competency frameworks and the classic 9-Box Matrix.",
      "Assess readiness, potential, risk and suitability for progression.",
      "Build effective leadership continuity and organisational agility.",
    ],
    highlights: [
      "Basics of Succession Planning",
      "Holistic Succession Planning",
      "Succession Planning & Management",
      "Identifying Potential Key Talent",
      "Development Plans",
      "Performance Management & Succession Processes",
      "Competency Frameworks",
      "Career Pathing",
      "9-Box Matrix / Grid",
      "Employee Scoring & Planning",
      "Potential Assessment",
      "Leadership Development",
      "Delegation & Performance Goal-Setting",
      "Readiness for Advancement",
      "Continuity & Leadership Transitions",
    ],
    audience: [
      "HR Business Partners (HRBP)",
      "HR Generalists",
      "Human Resources Managers",
      "HR Leaders",
      "Talent Management Professionals",
      "Organization Development (OD) Professionals",
      "Learning & Development (L&D) Professionals",
      "HR Consultants",
      "CEO and CHRO",
      "Heads of Department",
    ],
    trainer: {
      name: "ORASIUS Trainer",
      role: "Executive Coach & Leadership Training Expert",
      credentials: [
        "Global presenter & keynote speaker",
        "Performance Management, Organizational Development, Succession Planning & Change Management Specialist",
        "Certified Master Trainer (UK CIPD)",
        "Certified Adair Leadership Trainer",
        "C-Suite HR Executive",
        "Extensive public-sector and global corporate experience",
        "16+ years experience in the GCC",
        "Extensive international training and consulting experience",
      ],
    },
    registerPath: "/register",
    whatsappLink:
      "https://wa.me/918884386913?text=Hello%2C%20I%20want%20to%20secure%20my%20seat%20for%20the%20Certified%20in%20Succession%20Planning%20training%20(6-9%20October%202026)",
  },
  {
    id: "business-writing-ai-sep-2026",
    title: "Certification in Advanced Business Writing Using AI",
    tagline: "Write like a leader. Use AI like a professional.",
    summary:
      "Master executive reports, proposals and strategic communication using AI.",
    description:
      "Write like a leader. Use AI like a professional. Master executive reports, proposals, policies and strategic communication using AI.",
    date: "15 September 2026",
    duration: "1 Day",
    format: "Live Virtual Training",
    certification: "Professional Certification",
    posterImage: "/images/business-writing-training.png",
    posterAlt:
      "Orasius Certification in Advanced Business Writing Using AI training poster",
    outcomes: [
      "Structure executive reports, proposals and policies with clarity.",
      "Apply AI tools responsibly to draft, edit and refine business documents.",
      "Adapt tone and style for senior stakeholders.",
      "Reduce writing time while improving quality and consistency.",
    ],
    highlights: [
      "Executive Report Writing",
      "Proposals & Policies",
      "Strategic Communication",
      "AI-Assisted Drafting & Editing",
      "Tone, Clarity & Structure",
    ],
    audience: [
      "Managers and Team Leaders",
      "HR and L&D Professionals",
      "Corporate Communications Professionals",
      "Business Analysts and Consultants",
    ],
    trainer: {
      name: "ORASIUS Trainer",
      role: "Business Communication & AI Productivity Specialist",
      credentials: [
        "Certified Master Trainer",
        "Extensive international corporate training experience",
      ],
    },
    registerPath: "/register",
    whatsappLink:
      "https://wa.me/918884386913?text=Hello%2C%20I%20want%20to%20secure%20my%20seat%20for%20the%20Advanced%20Business%20Writing%20Using%20AI%20certification",
  },
];
