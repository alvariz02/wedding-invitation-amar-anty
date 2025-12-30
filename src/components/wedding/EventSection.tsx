import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const EventSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +WEDDING_CONFIG.event.weddingDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <SectionReveal variant="scale">
      <section id="event" className="py-20 px-4">
        <div className="mx-auto max-w-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-body text-sm tracking-[0.3em] text-accent">
            SAVE THE DATE
          </span>
          <h2 className="mt-2 font-heading text-3xl text-foreground">
            Wedding Events
          </h2>
          <p className="mt-2 text-muted-foreground">
            {WEDDING_CONFIG.event.displayDate}
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="wedding-card">
            <div className="grid grid-cols-4 gap-4">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 md:h-20 md:w-20">
                    <span className="font-heading text-2xl font-semibold text-primary md:text-3xl">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {unit.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Akad Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="wedding-card relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
            
            <div className="pl-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">
                  {WEDDING_CONFIG.event.akad.title}
                </h3>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{WEDDING_CONFIG.event.akad.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{WEDDING_CONFIG.event.akad.date}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span className="text-sm">{WEDDING_CONFIG.event.akad.location}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resepsi Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="wedding-card relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
            
            <div className="pl-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Calendar className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-foreground">
                  {WEDDING_CONFIG.event.resepsi.title}
                </h3>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{WEDDING_CONFIG.event.resepsi.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{WEDDING_CONFIG.event.resepsi.date}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span className="text-sm">{WEDDING_CONFIG.event.resepsi.location}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="wedding-card text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </div>

            <h3 className="mb-2 font-heading text-xl text-foreground">
              {WEDDING_CONFIG.event.venue.name}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {WEDDING_CONFIG.event.venue.address}
            </p>

            <motion.a
              href={WEDDING_CONFIG.event.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg"
            >
              <MapPin className="h-4 w-4" />
              View Location
              <ExternalLink className="h-3 w-3" />
            </motion.a>
          </div>
        </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
};