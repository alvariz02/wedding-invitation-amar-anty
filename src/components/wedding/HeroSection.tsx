import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/lib/constants";
import coupleHero from "@/assets/4.jpg";
import CountdownTimer from "./CountdownTimer";

export const HeroSection = () => {
  return ( 
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        {/* Top Ornament */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-accent" />
          <span className="font-body text-xs tracking-[0.4em] text-muted-foreground">
            THE WEDDING OF
          </span>
          <span className="h-px w-10 bg-accent" />
        </motion.div>

        {/* Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-accent/30 shadow-xl md:h-80 md:w-80">
            <img
              src={coupleHero}
              alt="Husain & Anti"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full border border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-6 rounded-full border border-dotted border-accent/20 animate-[spin_30s_linear_infinite_reverse]" />
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 font-heading text-5xl font-medium text-foreground md:text-6xl"
        >
          {WEDDING_CONFIG.couple.groom.name}
          <span className="mx-4 text-accent">&</span>
          {WEDDING_CONFIG.couple.bride.name}
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="font-body text-lg text-muted-foreground"
        >
          {WEDDING_CONFIG.event.displayDate}
        </motion.p>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-muted-foreground">
              SCROLL DOWN
            </span>
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};