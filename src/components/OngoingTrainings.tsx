import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { ongoingTrainings } from "@/data/trainings";
import { CalendarDays } from "lucide-react";

const OngoingTrainings = () => {
  if (ongoingTrainings.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground uppercase tracking-wide premium-section-title">
            Ongoing Trainings
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Currently running and upcoming programs open for registration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ongoingTrainings.map((training, i) => (
            <motion.div
              key={training.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 overflow-hidden"
            >
              <img
                src={training.posterImage}
                alt={training.title}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                  {training.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed mb-4">
                  {training.description}
                </p>
                <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
                  <CalendarDays className="h-4 w-4" />
                  <span>{training.date}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                  >
                    <a href={training.whatsappLink} target="_blank" rel="noopener noreferrer">
                      Book via WhatsApp
                    </a>
                  </Button>
                  {training.brochureLink !== undefined && (
                    <Button
                      asChild
                      size="lg"
                      variant="ghost"
                      className="border border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    >
                      <a href={training.brochureLink} target="_blank" rel="noopener noreferrer">
                        Request Brochure
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingTrainings;
