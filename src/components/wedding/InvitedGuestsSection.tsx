import { motion } from "framer-motion";
import { Users, Heart } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

export const InvitedGuestsSection = () => {
  return (
    <SectionReveal variant="slideLeft">
      <section className="py-20 px-4">
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
              UNDANGAN
            </span>
            <h2 className="mt-2 font-heading text-3xl text-foreground">
              Turut mengundang
            </h2>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Heart className="h-5 w-5 text-primary fill-primary" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </motion.div>

          {/* Mempelai Wanita */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="wedding-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">
                  Mempelai Wanita
                </h3>
              </div>
              <ul className="space-y-2">
                {WEDDING_CONFIG.invitedGuests.bride.map((guest, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-accent">{index + 1}.</span>
                    <span>{guest}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mempelai Pria */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="wedding-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-foreground">
                  Mempelai Pria
                </h3>
              </div>
              <ul className="space-y-2">
                {WEDDING_CONFIG.invitedGuests.groom.map((guest, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="text-accent">{index + 1}.</span>
                    <span>{guest}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
};

