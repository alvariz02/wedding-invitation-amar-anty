import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

export const QuoteSection = () => {
  return (
    <SectionReveal variant="fade">
      <section className="relative py-20 px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-lg"
        >
          <div className="wedding-card relative overflow-hidden">
            {/* Top ornament */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            
            {/* Quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -left-4 -top-4 font-heading text-8xl text-primary"
            >
              "
            </motion.div>

            <div className="relative z-10 text-center">
              {/* Decorative top */}
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                <svg
                  className="h-6 w-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
              </div>

              {/* Quote text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6 font-heading text-lg italic leading-relaxed text-foreground/90 md:text-xl"
              >
                "{WEDDING_CONFIG.quote.text}"
              </motion.p>

              {/* Source */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="font-body text-sm font-medium tracking-wider text-accent"
              >
                — {WEDDING_CONFIG.quote.source}
              </motion.p>

              {/* Decorative bottom */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                <div className="h-2 w-2 rotate-45 bg-accent" />
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
              </div>
            </div>

            {/* Bottom ornament */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </motion.div>
      </section>
    </SectionReveal>
  );
};
