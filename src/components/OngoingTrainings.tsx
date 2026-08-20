import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { ongoingTrainings } from "@/data/trainings";
import {
  CalendarDays,
  Monitor,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  UserRound,
} from "lucide-react";

const AUTOPLAY_MS = 5500;

const OngoingTrainings = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || ongoingTrainings.length < 2) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi]);

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

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {ongoingTrainings.map((training) => (
                <div
                  key={training.id}
                  className="min-w-0 flex-[0_0_100%] px-1 sm:px-2"
                >
                  <article className="h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 overflow-hidden flex flex-col">
                    <div className="bg-primary-foreground/5 p-4 md:p-6 flex items-center justify-center">
                      <img
                        src={training.posterImage}
                        alt={training.posterAlt}
                        className="w-full h-[320px] sm:h-[460px] md:h-[560px] object-contain rounded-xl"
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

                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <span className="inline-flex self-start items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 border border-primary-foreground/25 rounded-full px-3 py-1">
                        {training.certification}
                      </span>

                      <h3 className="mt-4 font-display text-xl md:text-2xl font-bold text-primary-foreground">
                        {training.title}
                      </h3>
                      <p className="mt-2 text-primary-foreground/70 text-sm md:text-base">
                        {training.summary}
                      </p>

                      <dl className="mt-5 grid sm:grid-cols-3 gap-3">
                        <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3">
                          <CalendarDays className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                          <div>
                            <dt className="text-[11px] uppercase tracking-wide text-primary-foreground/50">
                              Date
                            </dt>
                            <dd className="text-sm font-medium text-primary-foreground">
                              {training.date}
                            </dd>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3">
                          <Monitor className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                          <div>
                            <dt className="text-[11px] uppercase tracking-wide text-primary-foreground/50">
                              Format
                            </dt>
                            <dd className="text-sm font-medium text-primary-foreground">
                              {training.format}
                            </dd>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 px-4 py-3">
                          <UserRound className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                          <div>
                            <dt className="text-[11px] uppercase tracking-wide text-primary-foreground/50">
                              Trainer
                            </dt>
                            <dd className="text-sm font-medium text-primary-foreground">
                              {training.trainer.name}
                            </dd>
                          </div>
                        </div>
                      </dl>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button
                          asChild
                          size="lg"
                          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                        >
                          <Link to={training.registerPath}>
                            Secure Your Seat Today{" "}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {ongoingTrainings.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous training"
                onClick={scrollPrev}
                className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary/80 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next training"
                onClick={scrollNext}
                className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary/80 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="mt-8 flex items-center justify-center gap-3">
                {ongoingTrainings.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Go to ${t.title}`}
                    aria-current={i === selected}
                    onClick={() => scrollTo(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === selected
                        ? "w-8 bg-primary-foreground"
                        : "w-2.5 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default OngoingTrainings;
