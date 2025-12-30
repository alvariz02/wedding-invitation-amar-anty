import { motion, useScroll, useTransform } from "framer-motion";

const ScrollGradient = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to opacity values for each gradient layer
  const gradient1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const gradient2Opacity = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const gradient3Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const gradient4Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.85, 0.9], [0, 1, 1, 0]);
  const gradient5Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base gradient - cream/ivory tones */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradient1Opacity,
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--cream) / 0.3) 50%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Second layer - sage green tones */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradient2Opacity,
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--sage) / 0.15) 30%, hsl(var(--sage-light) / 0.2) 50%, hsl(var(--sage) / 0.15) 70%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Third layer - gold accent */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradient3Opacity,
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--gold) / 0.1) 40%, hsl(var(--gold-light) / 0.15) 50%, hsl(var(--gold) / 0.1) 60%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Fourth layer - deeper sage */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradient4Opacity,
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--forest) / 0.1) 30%, hsl(var(--sage-dark) / 0.15) 50%, hsl(var(--forest) / 0.1) 70%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Final layer - soft warm finish */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gradient5Opacity,
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--ivory) / 0.3) 40%, hsl(var(--cream) / 0.2) 60%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Subtle radial overlay for depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(var(--sage-light) / 0.1) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};

export default ScrollGradient;
