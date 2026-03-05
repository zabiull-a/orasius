import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Monitor, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { programs, programCategories } from "@/data/programs";
import { cn } from "@/lib/utils";
import { fadeUp, cardHover } from "@/lib/animations";
import heroPrograms from "@/assets/hero-programs.jpg";

const ProgramDetail = ({ programId }: { programId: string }) => {
  const program = programs.find((p) => p.id === programId);
  if (!program) return null;

  return (
    <Layout>
      <section
        className="relative overflow-hidden py-20 md:py-28 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroPrograms})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10">
          <Link to="/programs" className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Programs
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground premium-hero-title">{program.title}</h1>
          <span className="inline-block mt-3 text-sm text-primary-foreground/70 bg-primary-foreground/10 px-3 py-1 rounded-full">
            {program.category}
          </span>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 p-5 rounded-lg bg-secondary">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground text-sm">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-5 rounded-lg bg-secondary">
              <Monitor className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Format</p>
                <p className="font-medium text-foreground text-sm">{program.format}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-5 rounded-lg bg-secondary">
              <Award className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Certification</p>
                <p className="font-medium text-foreground text-sm">{program.certification}</p>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-foreground mb-4 premium-section-title">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-10 premium-body">{program.overview}</p>

          <h2 className="font-display text-2xl font-semibold text-foreground mb-4 premium-section-title">Learning Objectives</h2>
          <ul className="space-y-3 mb-10">
            {program.objectives.map((o) => (
              <li key={o} className="flex items-start gap-3 text-muted-foreground premium-body">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                {o}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="px-8 py-3 text-base">
              <Link to="/contact">Book Discovery Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 text-base">
              <Link to="/contact">Request Program Brochure</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Programs = () => {
  const { programId } = useParams();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (programId) return <ProgramDetail programId={programId} />;

  const filtered = activeCategory === "All" ? programs : programs.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroPrograms})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title"
          >
            Programs & Offerings
          </motion.h1>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-10 bg-accent">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground font-medium text-lg">Looking for a tailored training program for your organisation?</p>
          <Button asChild className="px-8 py-3 text-base">
            <Link to="/contact">Book Discovery Call <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["All", ...programCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 text-sm rounded-full border transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={cardHover.whileHover}
              >
                <Link
                  to={`/programs/${p.id}`}
                  className="block h-full p-7 rounded-lg border border-border bg-background hover:border-primary/30 transition-all"
                >
                  <span className="text-xs font-medium text-primary bg-secondary px-2.5 py-1 rounded-md">
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground line-clamp-3">{p.overview}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.duration}</span>
                    <span className="flex items-center gap-1"><Monitor className="h-3.5 w-3.5" /> {p.format.split("(")[0].trim()}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
