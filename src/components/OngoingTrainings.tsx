import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { ongoingTrainings } from "@/data/trainings";
import {
  CalendarDays,
  Clock,
  Monitor,
  Award,
  Check,
  ArrowRight,
  Users,
} from "lucide-react";

const OngoingTrainings = () => {
  if (ongoingTrainings.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground uppercase tracking-wide premium-section-title">
            Ongoing Trainings
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-base md:text-lg max-w-2xl mx-auto">
            Currently running and upcoming programs open for registration.
          </p>
        </motion.div>

        <div className="space-y-16">
          {ongoingTrainings.map((training, i) => (
            <motion.article
              key={training.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="mx-auto w-full max-w-6xl rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Poster */}
                <div className="bg-primary-foreground/5 p-4 md:p-6 flex items-start justify-center">
                  <img
                    src={training.posterImage}
                    alt={training.posterAlt}
                    className="w-full h-auto max-h-[820px] object-contain rounded-xl"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = "true";
                        img.src = "/placeholder.svg";
                      }
                    }}
                  />
                </div>

                {/* Details */}
                <div className="p-6 md:p-10 flex flex-col">
                  <span className="inline-flex self-start items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 border border-primary-foreground/25 rounded-full px-3 py-1">
                    {training.certification}
                  </span>

                  <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                    {training.title}
                  </h3>
                  <p className="mt-2 text-primary-foreground/70 text-sm md:text-base italic">
                    {training.tagline}
                  </p>
                  <p className="mt-4 text-primary-foreground/70 text-base leading-relaxed">
                    {training.description}
                  </p>

                  {/* Event facts */}
                  <dl className="mt-6 grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3">
                      <CalendarDays className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-primary-foreground/50">Date</dt>
                        <dd className="text-sm font-medium text-primary-foreground">{training.date}</dd>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3">
                      <Clock className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-primary-foreground/50">Duration</dt>
                        <dd className="text-sm font-medium text-primary-foreground">{training.duration}</dd>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3">
                      <Monitor className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-primary-foreground/50">Format</dt>
                        <dd className="text-sm font-medium text-primary-foreground">{training.format}</dd>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3">
                      <Award className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-primary-foreground/50">Time</dt>
                        <dd className="text-sm font-medium text-primary-foreground">To Be Confirmed</dd>
                      </div>
                    </div>
                  </dl>

                  {/* Outcomes */}
                  <h4 className="mt-8 font-display text-lg font-semibold text-primary-foreground">
                    Key Learning Outcomes
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {training.outcomes.slice(0, 6).map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-primary-foreground/70">
                        <Check className="h-4 w-4 mt-0.5 text-primary-foreground/50 flex-shrink-0" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Trainer */}
                  <div className="mt-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5">
                    <p className="text-[11px] uppercase tracking-widest text-primary-foreground/50">Trainer</p>
                    <p className="mt-1 font-display text-lg font-semibold text-primary-foreground">
                      {training.trainer.name}
                    </p>
                    <p className="text-sm text-primary-foreground/70">{training.trainer.role}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {training.trainer.credentials.map((c) => (
                        <li
                          key={c}
                          className="text-xs text-primary-foreground/70 border border-primary-foreground/15 rounded-full px-3 py-1"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                    >
                      <Link to={training.registerPath}>
                        Secure Your Seat Today <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="ghost"
                      className="border border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    >
                      <a href={training.whatsappLink} target="_blank" rel="noopener noreferrer">
                        Enquire via WhatsApp
                      </a>
                    </Button>
                  </div>
                  <p className="mt-4 text-xs text-primary-foreground/50">
                    info@orasius.com · +1 786 243 6792 · WhatsApp +91 888 438 6913
                  </p>
                </div>
              </div>

              {/* Course highlights + audience */}
              <div className="border-t border-primary-foreground/10 grid md:grid-cols-2">
                <div className="p-6 md:p-10 md:border-r border-primary-foreground/10">
                  <h4 className="font-display text-lg font-semibold text-primary-foreground flex items-center gap-2">
                    Course Highlights
                  </h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {training.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs md:text-sm text-primary-foreground/70 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-3 py-1.5"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 md:p-10 border-t md:border-t-0 border-primary-foreground/10">
                  <h4 className="font-display text-lg font-semibold text-primary-foreground flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary-foreground/70" /> Who Should Attend
                  </h4>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {training.audience.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-primary-foreground/70">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-foreground/40 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingTrainings;
