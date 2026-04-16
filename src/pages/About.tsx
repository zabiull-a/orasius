import { motion } from "framer-motion";
import { Heart, Lightbulb, Shield, Users, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { fadeUp, cardHover } from "@/lib/animations";
import globalImage from "@/lib/global-image";

const values = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in everything we do." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously explore new ideas and approaches to deliver impactful learning." },
  { icon: Heart, title: "Accountability", desc: "We take ownership of our commitments and deliver on our promises." },
  { icon: Users, title: "Collaboration", desc: "We build partnerships and work together to achieve shared goals." },
  { icon: Globe, title: "Inclusion", desc: "We embrace diversity and create equitable learning experiences for all." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${globalImage})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <p className="text-lg text-muted-foreground leading-relaxed premium-body">
              We are a global training and development provider delivering practical, industry-aligned learning solutions to professionals and organizations across regions. Our programs are designed by experienced industry practitioners and aligned with internationally recognized professional standards, ensuring relevance in diverse business environments.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed premium-body">
              Delivered through flexible learning models, our training combines real-world insights with hands-on application to support capability building in business, leadership, human resource management, technology, finance, supply chain, health & safety, risk management and professional development. We work with clients and learners across geographies to enable sustainable growth, improved performance, and workforce readiness in a rapidly evolving global landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="space-y-14">
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6 premium-section-title">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed premium-body">
                  Our vision is to become a trusted global partner in professional learning by shaping skills that matter for the future of work. We aim to create lasting impact by bridging the gap between knowledge and real-world application, empowering individuals to grow with confidence and organizations to perform with agility in an ever-changing business environment.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed premium-body">
                  Over the long term, we see ORASIUS evolving into a globally connected training ecosystem — collaborating with industry experts, institutions, and organizations across regions to deliver accessible and outcome-driven learning solutions.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6 premium-section-title">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed premium-body">
                  Our mission is to turn learning into lasting impact through dedication, discipline, and a relentless focus on quality. We commit ourselves every day to designing and delivering training that is practical, relevant, and meaningful — learning that empowers individuals to grow with confidence and enables organizations to perform at their best.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="hidden lg:block"
            >
              <img
                src={globalImage}
                alt="Executive coaching and mentorship"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide premium-section-title"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={cardHover.whileHover}
                className="text-center p-8 rounded-lg border border-border bg-background transition-shadow"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-md bg-secondary">
                  <v.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{v.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
