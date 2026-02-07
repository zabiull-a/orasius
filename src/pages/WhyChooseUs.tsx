import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Award, ShieldCheck, Heart, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

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
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
          >
            Why Choose Us
          </motion.h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We differentiate ourselves through depth of expertise, global perspective, and an uncompromising commitment to quality. Our programs are designed and delivered by seasoned professionals with international experience, ensuring relevance across diverse industries and regions.
          </motion.p>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            We apply rigorous quality assurance standards to every stage of the learning journey — from content design to delivery and learner engagement — so our clients can rely on consistent excellence. Supported by responsive, client-focused service and a culture built on integrity and accountability, we foster trust through long-term partnerships.
          </motion.p>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            By combining insight, innovation, and reliability, we deliver learning solutions that meet global expectations and create lasting value.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-6 rounded-lg bg-background border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent mb-4">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-foreground">Partner With Us</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our programs or reach out to discuss how we can support your organization's development goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
