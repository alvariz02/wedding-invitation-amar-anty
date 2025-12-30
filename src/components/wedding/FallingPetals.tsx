import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
  swayAmount: number;
}

const PetalShape = ({ size, opacity }: { size: number; opacity: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ opacity }}
  >
    <ellipse
      cx="12"
      cy="12"
      rx="6"
      ry="10"
      fill="currentColor"
      className="text-primary/40"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="4"
      ry="7"
      fill="currentColor"
      className="text-accent/30"
    />
  </svg>
);

const FallingPetal = ({ petal }: { petal: Petal }) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-[1]"
      initial={{
        x: `${petal.x}vw`,
        y: -50,
        rotate: petal.rotation,
        opacity: 0,
      }}
      animate={{
        y: "110vh",
        x: [
          `${petal.x}vw`,
          `${petal.x + petal.swayAmount}vw`,
          `${petal.x - petal.swayAmount}vw`,
          `${petal.x + petal.swayAmount / 2}vw`,
          `${petal.x}vw`,
        ],
        rotate: [petal.rotation, petal.rotation + 180, petal.rotation + 360],
        opacity: [0, petal.opacity, petal.opacity, petal.opacity, 0],
      }}
      transition={{
        duration: petal.duration,
        delay: petal.delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      <PetalShape size={petal.size} opacity={1} />
    </motion.div>
  );
};

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      const petalCount = 25;

      for (let i = 0; i < petalCount; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 12 + Math.random() * 8,
          size: 12 + Math.random() * 16,
          rotation: Math.random() * 360,
          opacity: 0.3 + Math.random() * 0.4,
          swayAmount: 3 + Math.random() * 5,
        });
      }

      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {petals.map((petal) => (
        <FallingPetal key={petal.id} petal={petal} />
      ))}
    </div>
  );
};

export default FallingPetals;
