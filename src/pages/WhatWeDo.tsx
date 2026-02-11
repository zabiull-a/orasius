import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Video, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { fadeUp } from "@/lib/animations";
import heroWhatWeDo from "@/assets/hero-whatwedo.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceWebinar from "@/assets/service-webinar.jpg";
import serviceEvents from "@/assets/service-events.jpg";

const serviceImages = [serviceTraining, serviceWebinar, serviceEvents];

const services = [
  {
    icon: BookOpen,
    title: "Training Programs",
    desc: "Instructor-led and virtual programs focused on practical skills and real-world application.",
    audience: "Professionals, managers, and teams seeking to develop specific competencies across leadership, technology, finance, HR, and more.",
    outcomes: [
      "Enhanced job-relevant skills and knowledge",
      "Practical tools and frameworks for immediate workplace application",
      "Alignment with internationally recognized professional standards",
    ],
  },
  {
    icon: Video,
    title: "Webinars",
    desc: "Flexible, interactive online sessions for continuous learning and global participation.",
    audience: "Working professionals, L&D teams, and organizations looking for accessible and time-efficient learning opportunities.",
    outcomes: [
      "Up-to-date insights on emerging trends and best practices",
      "Interaction with industry experts and thought leaders",
      "Convenient participation from any location worldwide",
    ],
  },
  {
    icon: Calendar,
    title: "Professional Events",
    desc: "Curated workshops, forums, and networking events encouraging collaboration and exchange of ideas.",
    audience: "Senior leaders, HR directors, and professionals seeking peer learning, collaboration, and thought leadership exposure.",
    outcomes: [
      "Cross-industry networking and relationship building",
      "Exposure to diverse perspectives and innovative practices",
      "Collaborative problem-solving and knowledge sharing",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <Layout>
      <section
        className="relative overflow-hidden py-20 md:py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroWhatWeDo})` }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">What We Do</h1>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl">
              We deliver a wide range of learning and engagement formats designed to meet diverse professional and organizational needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Who It's For</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.audience}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Learning Outcomes</h3>
                    <ul className="space-y-2">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/contact">
                      Enquire <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  src={serviceImages[i]}
                  alt={s.title}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
