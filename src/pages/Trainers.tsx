import { motion } from "framer-motion";
import { Users, MapPin, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { trainers } from "@/data/trainers";
import { fadeUp } from "@/lib/animations";
import heroTrainers from "@/assets/hero-trainers.jpg";

const Trainers = () => {
  return (
    <Layout>
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${heroTrainers})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title">Our Trainers</h1>
            <p className="mt-4 text-primary-foreground/80 text-lg md:text-xl max-w-2xl premium-body">
              Our programs are designed and delivered by seasoned professionals with extensive international experience across industries and regions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers
              .filter((t) => t.status === "Active")
              .map((trainer, i) => (
                <motion.div
                  key={trainer.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-lg border border-border bg-background p-10 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="h-14 w-14 text-primary/40" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{trainer.name}</h3>
                  <p className="text-primary text-sm mt-1">{trainer.expertise}</p>
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {trainer.experienceYears} years
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {trainer.regionsWorked.length} regions
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {trainer.regionsWorked.map((r) => (
                      <span key={r} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                        {r}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
