import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  MessageSquare,
  ClipboardCheck,
  Brain,
  Lightbulb,
  Shield,
  BarChart3,
  ArrowRight,
  Clock,
  UserCheck,
  Layers,
  Compass,
  Award,
  Building2,
  Banknote,
  HeartPulse,
  Factory,
  Cpu,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { fadeUp, cardHover } from "@/lib/animations";
import globalImage from "@/lib/global-image";
import OngoingTrainings from "@/components/OngoingTrainings";

const whyOrasius = [
  { icon: Award, title: "Practitioner-Led Faculty", desc: "Programs designed and delivered by senior industry practitioners across leadership, finance, operations, safety, HR, and compliance — not academic theorists." },
  { icon: ClipboardCheck, title: "Outcome-Based Learning", desc: "Every program is structured around measurable capability outcomes mapped to enterprise performance and workforce productivity metrics." },
  { icon: Shield, title: "Enterprise-Grade Confidentiality", desc: "Procurement-ready engagements with clear data handling, IP protection, and contractual governance standards." },
  { icon: GraduationCap, title: "Certification & CPD Credits", desc: "Programs issue verifiable certificates of completion with Continuing Professional Development credit hours." },
];

const capabilityAreas = [
  "Leadership Development",
  "Finance & Banking",
  "Workplace Safety",
  "Operations & Process Excellence",
  "Compliance & Governance",
  "Customer Service",
  "Corporate Communication",
  "Management & Supervisory Skills",
  "Professional Certifications",
  "Workforce Upskilling",
  "HR & Talent Acquisition",
  "Organizational Capability Development",
];

const industries = [
  { icon: Banknote, name: "Banking & Finance" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Building2, name: "Government & Public Sector" },
  { icon: Factory, name: "Energy & Manufacturing" },
  { icon: Users, name: "Retail & Hospitality" },
  { icon: Cpu, name: "Telecommunications & Technology" },
  { icon: Layers, name: "Corporate & Professional Services" },
  { icon: UserCheck, name: "Human Capital & Recruitment" },
];

const faqs = [
  {
    q: "What types of corporate training does ORASIUS deliver?",
    a: "ORASIUS designs and delivers enterprise training across leadership, finance and banking, workplace safety, operations, compliance, customer service, corporate communication, management, HR and talent acquisition, and broader workforce upskilling — tailored to each organisation's capability strategy.",
  },
  {
    q: "Which industries do you serve?",
    a: "We work with enterprises and public sector organisations across banking and finance, healthcare, government, energy, manufacturing, retail, hospitality, telecommunications, corporate services, and human capital — in the Caribbean region and globally.",
  },
  {
    q: "Are ORASIUS programs certified or CPD-aligned?",
    a: "Yes. Participants receive verifiable certificates of completion. Programs are structured to align with Continuing Professional Development (CPD) frameworks and award CPD credit hours.",
  },
  {
    q: "Who are these programs designed for?",
    a: "Programs serve executives, managers, functional specialists, supervisors, professional staff and emerging leaders across enterprise and public sector organisations.",
  },
  {
    q: "Can programs be customised for a specific organisation?",
    a: "Every engagement is scoped against the client's capability gaps, workforce strategy, and operating context. Content, case material, and simulations are tailored to the organisation and industry.",
  },
  {
    q: "How are programs delivered?",
    a: "We deliver facilitator-led workshops in-person and through live virtual classrooms, blended cohorts, and structured multi-week tracks — depending on scope and learner geography.",
  },
  {
    q: "How do we engage ORASIUS for a corporate program?",
    a: "Book a discovery call or request a program brochure. Our team will scope objectives, audience, and delivery format, and return a tailored proposal within one business week.",
  },
];

const programStructure = [
  {
    icon: UserCheck,
    title: "Target Participants",
    desc: "Managers, team leaders, HR professionals, emerging leaders, operational supervisors, and professional staff across corporate functions.",
  },
  {
    icon: Layers,
    title: "Delivery Format",
    desc: "Facilitated workshops, decision-based simulations, applied exercises, and structured reflection — designed for active participation.",
  },
  {
    icon: Clock,
    title: "Program Duration",
    desc: "Programs range from intensive 2-day workshops to structured 8-week capability development tracks, tailored to organisational needs.",
  },
  {
    icon: Users,
    title: "Cohort Structure",
    desc: "Small cohorts of 12–20 participants to enable focused facilitation, peer learning, and meaningful engagement throughout.",
  },
];

const methodology = [
  { icon: Compass, title: "Real Workplace Scenarios", desc: "Participants work through situations drawn from actual organisational challenges — not textbook theory." },
  { icon: Brain, title: "Decision-Based Simulations", desc: "Structured exercises that require participants to assess information, weigh trade-offs, and justify their decisions." },
  { icon: MessageSquare, title: "Facilitated Discussion & Analysis", desc: "Guided group analysis of complex situations, developing critical thinking and stakeholder awareness." },
  { icon: ClipboardCheck, title: "Applied Exercises & Reflection", desc: "Practical tasks followed by structured reflection to embed learning and build lasting professional capability." },
];

const programExperience = [
  "Leadership decision simulations that mirror real organisational complexity",
  "Stakeholder communication scenarios with structured feedback",
  "Operational problem-solving exercises involving competing priorities",
  "Team collaboration challenges that develop coordination and influence",
  "Managerial judgement exercises under time pressure and ambiguity",
  "Action planning grounded in each participant's operational reality",
];

const facilitators = [
  {
    icon: Target,
    title: "Leadership & Operational Excellence",
    desc: "Facilitators with direct experience helping leaders improve decision quality, manage ambiguity, and lead through organisational complexity.",
  },
  {
    icon: Shield,
    title: "Functional & Professional Capability",
    desc: "Specialists across HR, operations, finance, and management who diagnose capability gaps and guide participants through structured development.",
  },
  {
    icon: BarChart3,
    title: "Performance & Capability Development",
    desc: "Practitioners focused on building measurable capability, translating learning into workplace behaviour change and improved performance outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Session Facilitation Approach",
    desc: "Our facilitators guide rather than lecture — using probing questions, scenario debriefs, and structured feedback to develop participant judgement.",
  },
];

const Index = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Strategic HR Function & Talent Acquisition Masterclass",
    description:
      "Enterprise masterclass aligning workforce strategy with modern talent acquisition to drive measurable business impact.",
    provider: {
      "@type": "EducationalOrganization",
      name: "ORASIUS",
      sameAs: "https://www.orasius.com",
    },
  };

  return (
    <Layout>
      <SEO
        title="Enterprise Learning Solutions Across Industries | ORASIUS"
        description="ORASIUS delivers multi-industry professional training and workforce development — leadership, finance, safety, operations, compliance, HR, customer service and certifications for enterprises across the Caribbean and globally."
        path="/"
        jsonLd={[faqJsonLd, courseJsonLd]}
      />
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${globalImage})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground uppercase tracking-wide premium-hero-title">
              Enterprise Learning Solutions Across Industries
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-primary-foreground/75 max-w-2xl leading-relaxed premium-body">
              ORASIUS is a multi-industry professional training and workforce
              development partner for enterprises across the Caribbean and
              beyond — delivering certification-aligned programs in leadership,
              finance, safety, operations, compliance, customer service,
              communication, HR and talent acquisition.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-3 text-base"
              >
                <Link to="/contact">Book Discovery Call</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-10 py-3 text-base"
              >
                <Link to="/contact">Request Program Brochure</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <OngoingTrainings />

      {/* ── Corporate Learning Solutions ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">
              Corporate Learning Solutions
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg premium-body">
              A multi-industry portfolio of professional training and workforce
              development areas — engineered for enterprise capability transformation,
              professional advancement, and measurable business outcomes.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
            {capabilityAreas.map((item, i) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-2 p-4 rounded-lg border border-border bg-background"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm md:text-base font-medium text-foreground leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Overview ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">
              How Our Programs Work
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg premium-body">
              Every ORASIUS program is designed to develop practical capability — not just knowledge. Programs span leadership, finance and banking, workplace safety, operations, compliance, customer service, communication, management, HR and talent acquisition, and broader workforce upskilling — customised to each organisation and industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programStructure.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={cardHover.whileHover}
                className="p-8 rounded-lg border border-border bg-background transition-shadow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-secondary">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">
              Our Capability Development Methodology
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg premium-body">
              We focus on developing professional judgement and practical capability — not just transferring information. Every element of our methodology is designed to create behaviour change that lasts beyond the classroom.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {methodology.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex gap-5 p-6 rounded-lg bg-background border border-border"
              >
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base">
              <Link to="/methodology">Explore Full Methodology <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Inside the Program ── */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">
              Inside the Program
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg premium-body max-w-2xl mx-auto">
              Participants don't sit through lectures. They work through realistic, challenging scenarios that mirror the decisions leaders, managers, and professionals face every day.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {programExperience.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-3 p-5 rounded-lg border border-border bg-background"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilitators ── */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">
              Facilitators
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg premium-body">
              Our facilitators are practitioners — not motivational speakers. They bring direct experience across leadership, management, and professional development, guiding participants through structured problem-solving.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facilitators.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={cardHover.whileHover}
                className="p-8 rounded-lg bg-background border border-border transition-shadow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-secondary">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Why ORASIUS ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">Why ORASIUS</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg premium-body">
              We are chosen by executives, L&amp;D heads, and enterprise procurement teams across industries that require credible, audit-ready training partners — not generic content vendors.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyOrasius.map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="p-6 md:p-8 rounded-lg border border-border bg-background">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certification & CPD ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">
                Certification &amp; CPD Credits
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg premium-body">
                Every ORASIUS program issues a verifiable certificate of completion and is structured around Continuing Professional Development (CPD) credit hours — recognised by HR institutes, professional bodies, and enterprise L&amp;D frameworks.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Verifiable digital and printed certificates",
                  "Structured CPD credit hours per program",
                  "Mapped to enterprise capability frameworks",
                  "Procurement-ready documentation on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="p-8 md:p-10 rounded-lg bg-primary text-primary-foreground">
              <Award className="h-10 w-10 mb-4" aria-hidden="true" />
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">Enterprise Learning Outcomes</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-sm md:text-base">
                Capability uplift measured against pre-defined outcomes — including leadership readiness, operational and safety performance, compliance maturity, customer experience quality, and workforce productivity indicators.
              </p>
              <Button asChild size="lg" className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                <Link to="/contact">Request Program Brochure</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industries We Support ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">Industries We Support</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg premium-body">
              ORASIUS delivers professional training and workforce development across regulated, customer-facing, and operationally complex sectors in the Caribbean region and globally.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {industries.map((item, i) => (
              <motion.div key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-center gap-3 p-4 md:p-5 rounded-lg border border-border bg-background">
                <item.icon className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm md:text-base font-medium text-foreground">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-10 md:mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">Frequently Asked Questions</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg premium-body">
              Common questions from executives, L&amp;D heads, and procurement teams evaluating ORASIUS for enterprise training engagements.
            </p>
          </motion.div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${globalImage})` }}
      >
        <div className="absolute inset-0 bg-primary/92" />
        <div className="container relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground uppercase tracking-wide premium-section-title">
            Ready to Strengthen Your Team's Decision Capability?
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg md:text-xl premium-body">
            Book a discovery call to discuss how ORASIUS can support your
            organisation's capability development goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-3 text-base">
              <Link to="/contact">Book Discovery Call</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="border border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-10 py-3 text-base">
              <Link to="/contact">Request Program Brochure</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
