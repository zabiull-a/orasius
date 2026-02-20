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
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { fadeUp, cardHover } from "@/lib/animations";
import heroHome from "@/assets/hero-home.jpg";
import ctaBoardroom from "@/assets/cta-boardroom.jpg";
import focusBusiness from "@/assets/focus-business.webp";
import focusHr from "@/assets/focus-hr.webp";
import focusTechnology from "@/assets/focus-technology.webp";
import focusFinance from "@/assets/focus-finance.webp";
import focusSupply from "@/assets/focus-supply.webp";
import focusSafety from "@/assets/focus-safety.webp";
import focusRisk from "@/assets/focus-risk.webp";
import focusDevelopment from "@/assets/focus-development.webp";

const focusAreas = [
  { icon: Briefcase, label: "Business & Leadership", image: focusBusiness },
  { icon: Users, label: "Human Resource Management", image: focusHr },
  { icon: Monitor, label: "Technology", image: focusTechnology },
  { icon: DollarSign, label: "Finance", image: focusFinance },
  { icon: Truck, label: "Supply Chain", image: focusSupply },
  { icon: ShieldCheck, label: "Health & Safety", image: focusSafety },
  { icon: AlertTriangle, label: "Risk Management", image: focusRisk },
  { icon: GraduationCap, label: "Professional Development", image: focusDevelopment },
];

const whyChoose = [
  { icon: Award, title: "Expert-Led Learning", desc: "Programs designed and delivered by seasoned industry practitioners with international experience." },
  { icon: Globe, title: "Global Perspective", desc: "Training solutions that are relevant across diverse industries, cultures, and regions worldwide." },
  { icon: Target, title: "Practical Application", desc: "Real-world insights and hands-on exercises that drive measurable workplace outcomes." },
  { icon: Heart, title: "Ethical & Transparent Approach", desc: "A culture built on integrity, accountability, and transparent communication at every level." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero — full viewport, parallax */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroHome})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground uppercase tracking-wide premium-hero-title">
              Global Training & Development for Future-Ready Professionals
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed premium-body">
              Industry-aligned learning solutions for individuals and
              organizations across regions, delivered by experienced practitioners.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-3 text-base"
              >
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-10 py-3 text-base"
              >
                <Link to="/programs">Upcoming Webinars</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide premium-section-title">
              Who We Are
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg premium-body">
              ORASIUS is a global training and professional development platform
              delivering industry-aligned learning solutions for individuals and
              organizations across regions. Our programs combine real-world
              insights with hands-on application to support capability building
              across business, leadership, technology, finance, and more.
            </p>
            <Button asChild variant="link" className="mt-4 text-primary text-base">
              <Link to="/about">
                Learn more about us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide premium-section-title"
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
                whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
                className="group relative flex flex-col items-center justify-center text-center p-8 rounded-md overflow-hidden min-h-[200px] cursor-default"
              >
                {/* Background image */}
                <img
                  src={area.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 blur-[2px] group-hover:blur-[1px] group-hover:brightness-110 md:opacity-100 opacity-80"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/35 transition-opacity duration-300" />
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <area.icon className="h-12 w-12 text-white mb-4 drop-shadow-md" />
                  <span className="text-sm md:text-base font-semibold text-white drop-shadow-md">
                    {area.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ORASIUS */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide premium-section-title"
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
                className="text-center p-6 rounded-md transition-shadow"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-md bg-secondary">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base">
              <Link to="/why-choose-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA — parallax */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${ctaBoardroom})` }}
      >
        <div className="absolute inset-0 bg-primary/92" />
        <div className="container relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground uppercase tracking-wide premium-section-title">
            Ready to Elevate Your Team?
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg md:text-xl premium-body">
            Explore our programs or get in touch to discuss customized training
            solutions for your organization.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-3 text-base">
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

export default Index;
