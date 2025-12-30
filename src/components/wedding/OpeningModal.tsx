import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { WEDDING_CONFIG } from "@/lib/constants";

interface OpeningModalProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningModal = ({ isOpen, onOpen }: OpeningModalProps) => {
  const [searchParams] = useSearchParams();
  // Support multiple parameter names: 'to', 'nama', 'name', 'guest'
  const guestName = 
    searchParams.get("to") || 
    searchParams.get("nama") || 
    searchParams.get("name") || 
    searchParams.get("guest") || 
    "Tamu Terhormat";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/13.jpg"
              alt="Couple"
              loading="eager"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 flex flex-col items-center px-6 text-center"
          >
            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-gold" />
                <span className="font-heading text-sm tracking-[0.3em] text-gold">
                  THE WEDDING OF
                </span>
                <span className="h-px w-12 bg-gold" />
              </div>
            </motion.div>

            {/* Couple Names */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-4 font-heading text-5xl font-medium tracking-wide text-cream md:text-6xl"
            >
              {WEDDING_CONFIG.couple.groom.name}
            </motion.h1>

            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
              className="my-2"
            >
              <span className="font-heading text-3xl italic text-gold">&</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mb-8 font-heading text-5xl font-medium tracking-wide text-cream md:text-6xl"
            >
              {WEDDING_CONFIG.couple.bride.name}
            </motion.h1>

            {/* Guest Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mb-2 text-sm tracking-widest text-cream/80"
            >
              KEPADA YTH.
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mb-10 font-heading text-xl text-cream"
            >
              {guestName}
            </motion.p>

            {/* Open Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="group relative overflow-hidden rounded-full border-2 border-gold bg-transparent px-10 py-4 font-body text-sm font-medium tracking-widest text-cream transition-all duration-300 hover:bg-gold hover:text-foreground"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                OPEN INVITATION
              </span>
            </motion.button>

            {/* Scroll Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute -bottom-20 flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-8 w-5 rounded-full border-2 border-cream/50"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mx-auto mt-1 h-2 w-1 rounded-full bg-cream/70"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};