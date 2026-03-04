import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Brain, MessageSquare, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { fadeUp } from "@/lib/animations";
import heroWhatWeDo from "@/assets/hero-whatwedo.jpg";

const steps = [
  {
    icon: Compass,
    title: "Real Workplace Scenarios",
    desc: "Every session begins with situations drawn from actual organisational challenges — restructuring decisions, stakeholder conflicts, capability gaps, and resource trade-offs. Participants engage with the messiness of real work, not sanitised case studies.",
  },
  {
    icon: Brain,
    title: "Decision-Based Simulations",
    desc: "Participants are placed in structured simulations where they must assess incomplete information, weigh competing priorities, and make defensible decisions under time pressure — mirroring the conditions leaders face daily.",
  },
  {
    icon: MessageSquare,
    title: "Facilitated Discussion & Analysis",
    desc: "Our facilitators guide group analysis of complex situations, surfacing assumptions, testing reasoning, and developing stakeholder awareness. This builds critical thinking that transfers directly to the workplace.",
  },
  {
    icon: ClipboardCheck,
    title: "Applied Exercises & Reflection",
    desc: "Each module concludes with practical exercises followed by structured reflection. Participants articulate what they learned, how it connects to their role, and what they will do differently — embedding lasting behaviour change.",
  },
];

const Methodology = () => {
  return (
    <Layout>
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroWhatWeDo})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title">
              Our Methodology
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-lg md:text-xl max-w-2xl premium-body">
              A structured approach to developing judgement, influence, and operational leadership.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <p className="text-lg text-muted-foreground leading-relaxed premium-body">
              Most corporate training fails because it transfers information without changing behaviour. Our methodology is designed differently — every element focuses on building the decision-making capability that leaders actually need.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed premium-body">
              We don't deliver lectures. We create structured learning environments where participants practise the thinking, communication, and judgement skills required to lead effectively in complex organisational settings.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-4xl">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide premium-section-title"
          >
            The Four Pillars
          </motion.h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex gap-6 p-8 rounded-lg bg-background border border-border"
              >
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-md bg-secondary">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed premium-body">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground uppercase tracking-wide premium-section-title">
            See It in Action
          </h2>
          <p className="mt-4 text-muted-foreground text-lg premium-body">
            Book a discovery call to learn how our methodology can be applied to your organisation's specific capability challenges.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-10 py-3 text-base">
              <Link to="/contact">Book Discovery Call <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-3 text-base">
              <Link to="/contact">Request Program Brochure</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Methodology;
