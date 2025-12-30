import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

export const CoupleSection = () => {
  return (
    <SectionReveal variant="slideUp">
      <section id="couple" className="py-20 px-4">
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
            THE HAPPY COUPLE
          </span>
          <h2 className="mt-2 font-heading text-3xl text-foreground">
            Bride & Groom
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>

        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="wedding-card flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-accent/30 shadow-lg">
                <img
                  src={WEDDING_CONFIG.couple.groom.photo}
                  alt={WEDDING_CONFIG.couple.groom.fullName}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                The Groom
              </div>
            </div>
            
            <h3 className="mb-2 font-heading text-2xl text-foreground">
              {WEDDING_CONFIG.couple.groom.fullName}
            </h3>
            <p className="mb-4 font-body text-sm text-muted-foreground">
              {WEDDING_CONFIG.couple.groom.parents}
            </p>
            
            <motion.a
              href={WEDDING_CONFIG.couple.groom.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </motion.a>
          </div>
        </motion.div>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="my-4 flex justify-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-accent-foreground shadow-gold">
            <span className="font-heading">&</span>
          </div>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="wedding-card flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-accent/30 shadow-lg">
                <img
                  src={WEDDING_CONFIG.couple.bride.photo}
                  alt={WEDDING_CONFIG.couple.bride.fullName}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                The Bride
              </div>
            </div>
            
            <h3 className="mb-2 font-heading text-2xl text-foreground">
              {WEDDING_CONFIG.couple.bride.fullName}
            </h3>
            <p className="mb-4 font-body text-sm text-muted-foreground">
              {WEDDING_CONFIG.couple.bride.parents}
            </p>
            
            <motion.a
              href={WEDDING_CONFIG.couple.bride.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </motion.a>
          </div>
        </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
};