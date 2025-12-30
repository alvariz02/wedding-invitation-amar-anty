import { motion } from "framer-motion";
import { Home, Heart, Calendar, Image, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "couple", label: "Couple", icon: Heart },
  { id: "event", label: "Event", icon: Calendar },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "rsvp", label: "RSVP", icon: Mail },
];

interface FloatingNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const FloatingNav = ({ activeSection, onNavigate }: FloatingNavProps) => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-border/50 bg-card/95 px-3 py-2 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex flex-col items-center gap-0.5 rounded-full px-3 py-2 transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
              
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-primary"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};