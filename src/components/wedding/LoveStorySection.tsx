import { motion } from "framer-motion";
import { Heart, Sparkles, Calendar } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

const iconMap = {
  heart: Heart,
  sparkles: Sparkles,
  ring: Sparkles,
  calendar: Calendar,
};

export const LoveStorySection = () => {
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
              OUR JOURNEY
            </span>
            <h2 className="mt-2 font-heading text-3xl text-foreground">
              Love Story
            </h2>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Heart className="h-5 w-5 text-primary fill-primary" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-primary" />

            {WEDDING_CONFIG.loveStory.map((story, index) => {
              const Icon = iconMap[story.icon as keyof typeof iconMap] || Heart;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-8 pl-16"
                >
                  {/* Icon */}
                  <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-card border-4 border-primary shadow-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="wedding-card">
                    <span className="mb-1 block text-xs font-medium tracking-wider text-accent">
                      {story.date}
                    </span>
                    <h3 className="mb-2 font-heading text-lg text-foreground">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {story.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};
