import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Monitor,
  DollarSign,
  Truck,
  ShieldCheck,
  AlertTriangle,
  GraduationCap,
  Globe,
  Award,
  Target,
  Heart,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { trainers } from "@/data/trainers";
import { fadeUp, cardHover, scaleHover } from "@/lib/animations";
import heroHome from "@/assets/hero-home.jpg";
import ctaBoardroom from "@/assets/cta-boardroom.jpg";

const focusAreas = [
  { icon: Briefcase, label: "Business & Leadership" },
  { icon: Users, label: "Human Resource Management" },
  { icon: Monitor, label: "Technology" },
  { icon: DollarSign, label: "Finance" },
  { icon: Truck, label: "Supply Chain" },
  { icon: ShieldCheck, label: "Health & Safety" },
  { icon: AlertTriangle, label: "Risk Management" },
  { icon: GraduationCap, label: "Professional Development" },
];

const whyChoose = [
  { icon: Award, title: "Expert-Led Learning", desc: "Programs designed and delivered by seasoned industry practitioners with international experience." },
  { icon: Globe, title: "Global Perspective", desc: "Training solutions that are relevant across diverse industries, cultures, and regions worldwide." },
  { icon: Target, title: "Practical Application", desc: "Real-world insights and hands-on exercises that drive measurable workplace outcomes." },
  { icon: Heart, title: "Ethical & Transparent Approach", desc: "A culture built on integrity, accountability, and transparent communication at every level." },
];

const featuredTrainers = trainers.filter((t) => t.featured && t.status === "Active");

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroHome})` }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(210_52%_30%/0.4)_0%,_transparent_60%)]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Global Training & Development for Future-Ready Professionals
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Industry-aligned learning solutions for individuals and
              organizations across regions, delivered by experienced practitioners.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/programs">Upcoming Webinars</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Who We Are
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              ORASIUS is a global training and professional development platform
              delivering industry-aligned learning solutions for individuals and
              organizations across regions. Our programs combine real-world
              insights with hands-on application to support capability building
              across business, leadership, technology, finance, and more.
            </p>
            <Button asChild variant="link" className="mt-4">
              <Link to="/about">
                Learn more about us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl md:text-4xl font-semibold text-center mb-14"
          >
            Core Focus Areas
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={cardHover.whileHover}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border transition-shadow"
              >
                <area.icon className="h-8 w-8 text-primary mb-4" />
                <span className="text-sm font-medium text-foreground">
                  {area.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IELENT */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl md:text-4xl font-semibold text-center mb-14"
          >
            Why Choose ORASIUS
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={cardHover.whileHover}
                className="text-center p-4 rounded-lg transition-shadow"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/why-choose-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trainer Spotlight */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl md:text-4xl font-semibold text-center mb-14"
          >
            Trainer Spotlight
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTrainers.map((trainer, i) => (
              <motion.div
                key={trainer.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={scaleHover.whileHover}
                className="bg-background rounded-lg border border-border p-6 text-center transition-shadow"
              >
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-accent flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary/40" />
                </div>
                <h3 className="font-semibold text-foreground">{trainer.name}</h3>
                <p className="text-sm text-primary mt-1">{trainer.expertise}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {trainer.regionsWorked.slice(0, 2).join(", ")}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/trainers">View All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBoardroom})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
            Ready to Elevate Your Team?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Explore our programs or get in touch to discuss customized training
            solutions for your organization.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
