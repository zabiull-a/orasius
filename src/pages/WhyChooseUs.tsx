import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Award, ShieldCheck, Heart, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { fadeUp, cardHover } from "@/lib/animations";
import heroWhyChoose from "@/assets/hero-whychoose.jpg";
import ctaPartnership from "@/assets/cta-partnership.jpg";

const differentiators = [
  { icon: Globe, title: "Global Perspective", desc: "Training solutions designed for relevance across diverse industries, cultures, and geographies." },
  { icon: Award, title: "Industry Practitioner Trainers", desc: "Our programs are delivered by seasoned professionals with hands-on international experience." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous standards applied to every stage — from content design to delivery and engagement." },
  { icon: Heart, title: "Ethical Practices", desc: "A culture built on integrity, accountability, and transparent communication at every level." },
  { icon: Handshake, title: "Long-Term Partnerships", desc: "We foster trust through responsive, client-focused service and sustained collaboration." },
];

const WhyChooseUs = () => {
  return (
    <Layout>
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroWhyChoose})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title"
          >
            Why Choose Us
          </motion.h1>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-lg text-muted-foreground leading-relaxed premium-body"
          >
            We differentiate ourselves through depth of expertise, global perspective, and an uncompromising commitment to quality. Our programs are designed and delivered by seasoned professionals with international experience, ensuring relevance across diverse industries and regions.
          </motion.p>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="mt-6 text-lg text-muted-foreground leading-relaxed premium-body"
          >
            We apply rigorous quality assurance standards to every stage of the learning journey — from content design to delivery and learner engagement — so our clients can rely on consistent excellence. Supported by responsive, client-focused service and a culture built on integrity and accountability, we foster trust through long-term partnerships.
          </motion.p>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="mt-6 text-lg text-muted-foreground leading-relaxed premium-body"
          >
            By combining insight, innovation, and reliability, we deliver learning solutions that meet global expectations and create lasting value.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={cardHover.whileHover}
                className="p-8 rounded-lg bg-background border border-border transition-shadow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-secondary mb-5">
                  <d.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{d.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${ctaPartnership})` }}
      >
        <div className="absolute inset-0 bg-primary/92" />
        <div className="container relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground premium-section-title">Partner With Us</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg md:text-xl premium-body">
            Explore our programs or reach out to discuss how we can support your organization's development goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-3 text-base">
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="border border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-10 py-3 text-base">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
