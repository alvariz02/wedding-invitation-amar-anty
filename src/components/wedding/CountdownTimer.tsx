import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = WEDDING_CONFIG.event.weddingDate;
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-8 flex items-center justify-center gap-3 md:gap-4"
    >
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative flex h-14 w-14 items-center justify-center rounded-lg border border-accent/30 bg-card/50 shadow-soft md:h-16 md:w-16">
            <motion.span
              key={unit.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-heading text-xl font-semibold text-primary md:text-2xl"
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
            {/* Corner decorations */}
            <span className="absolute -left-0.5 -top-0.5 h-2 w-2 border-l border-t border-accent/50" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 border-r border-t border-accent/50" />
            <span className="absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-accent/50" />
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-accent/50" />
          </div>
          <span className="mt-2 font-body text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
