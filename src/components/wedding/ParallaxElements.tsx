import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Flower2, TreeDeciduous, Bird, Sparkles } from "lucide-react";

interface FloatingElementProps {
  icon: React.ReactNode;
  className?: string;
  scrollMultiplier?: number;
  rotateMultiplier?: number;
}

const FloatingElement = ({
  icon,
  className = "",
  scrollMultiplier = 0.5,
  rotateMultiplier = 0.1,
}: FloatingElementProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, 3000 * scrollMultiplier]);
  const rotate = useTransform(scrollY, [0, 3000], [0, 360 * rotateMultiplier]);
  const opacity = useTransform(scrollY, [0, 500, 2500, 3000], [0.3, 0.6, 0.6, 0.3]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ y, rotate, opacity }}
    >
      {icon}
    </motion.div>
  );
};

const ParallaxElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Left side - Dense floral arrangement */}
      <FloatingElement
        icon={<Leaf className="w-6 h-6 text-primary/50" />}
        className="left-[2%] top-[5%]"
        scrollMultiplier={0.2}
        rotateMultiplier={0.3}
      />
      <FloatingElement
        icon={<Flower2 className="w-10 h-10 text-primary/40" />}
        className="left-[5%] top-[8%]"
        scrollMultiplier={0.35}
        rotateMultiplier={0.5}
      />
      <FloatingElement
        icon={<Leaf className="w-8 h-8 text-accent/35" />}
        className="left-[8%] top-[12%]"
        scrollMultiplier={0.25}
        rotateMultiplier={-0.4}
      />
      <FloatingElement
        icon={<Sparkles className="w-5 h-5 text-accent/50" />}
        className="left-[3%] top-[18%]"
        scrollMultiplier={0.15}
        rotateMultiplier={0.8}
      />
      <FloatingElement
        icon={<Flower2 className="w-12 h-12 text-primary/30" />}
        className="left-[6%] top-[22%]"
        scrollMultiplier={0.4}
        rotateMultiplier={0.3}
      />
      <FloatingElement
        icon={<Bird className="w-7 h-7 text-muted-foreground/40" />}
        className="left-[10%] top-[28%]"
        scrollMultiplier={0.18}
        rotateMultiplier={0.2}
      />
      <FloatingElement
        icon={<Leaf className="w-9 h-9 text-primary/45" />}
        className="left-[4%] top-[32%]"
        scrollMultiplier={0.3}
        rotateMultiplier={-0.5}
      />
      <FloatingElement
        icon={<Flower2 className="w-8 h-8 text-accent/40" />}
        className="left-[7%] top-[38%]"
        scrollMultiplier={0.45}
        rotateMultiplier={0.4}
      />
      <FloatingElement
        icon={<Sparkles className="w-6 h-6 text-accent/45" />}
        className="left-[2%] top-[42%]"
        scrollMultiplier={0.12}
        rotateMultiplier={1}
      />
      <FloatingElement
        icon={<TreeDeciduous className="w-10 h-10 text-primary/35" />}
        className="left-[9%] top-[48%]"
        scrollMultiplier={0.38}
        rotateMultiplier={0.15}
      />
      <FloatingElement
        icon={<Leaf className="w-7 h-7 text-primary/50" />}
        className="left-[5%] top-[52%]"
        scrollMultiplier={0.28}
        rotateMultiplier={-0.3}
      />
      <FloatingElement
        icon={<Flower2 className="w-11 h-11 text-accent/35" />}
        className="left-[3%] top-[58%]"
        scrollMultiplier={0.5}
        rotateMultiplier={0.6}
      />
      <FloatingElement
        icon={<Bird className="w-6 h-6 text-muted-foreground/35" />}
        className="left-[8%] top-[62%]"
        scrollMultiplier={0.22}
        rotateMultiplier={0.25}
      />
      <FloatingElement
        icon={<Sparkles className="w-4 h-4 text-accent/55" />}
        className="left-[6%] top-[68%]"
        scrollMultiplier={0.16}
        rotateMultiplier={-0.9}
      />
      <FloatingElement
        icon={<Leaf className="w-10 h-10 text-primary/40" />}
        className="left-[4%] top-[72%]"
        scrollMultiplier={0.42}
        rotateMultiplier={0.35}
      />
      <FloatingElement
        icon={<Flower2 className="w-9 h-9 text-primary/35" />}
        className="left-[7%] top-[78%]"
        scrollMultiplier={0.32}
        rotateMultiplier={-0.45}
      />
      <FloatingElement
        icon={<TreeDeciduous className="w-8 h-8 text-primary/30" />}
        className="left-[2%] top-[82%]"
        scrollMultiplier={0.48}
        rotateMultiplier={0.1}
      />
      <FloatingElement
        icon={<Leaf className="w-6 h-6 text-accent/40" />}
        className="left-[9%] top-[88%]"
        scrollMultiplier={0.26}
        rotateMultiplier={0.55}
      />
      <FloatingElement
        icon={<Sparkles className="w-5 h-5 text-accent/50" />}
        className="left-[5%] top-[92%]"
        scrollMultiplier={0.14}
        rotateMultiplier={-0.7}
      />
      <FloatingElement
        icon={<Flower2 className="w-10 h-10 text-primary/45" />}
        className="left-[3%] top-[98%]"
        scrollMultiplier={0.36}
        rotateMultiplier={0.4}
      />

      {/* Right side - Dense floral arrangement */}
      <FloatingElement
        icon={<Flower2 className="w-9 h-9 text-primary/45" />}
        className="right-[3%] top-[3%]"
        scrollMultiplier={0.28}
        rotateMultiplier={-0.35}
      />
      <FloatingElement
        icon={<Leaf className="w-7 h-7 text-accent/40" />}
        className="right-[6%] top-[8%]"
        scrollMultiplier={0.38}
        rotateMultiplier={0.5}
      />
      <FloatingElement
        icon={<Sparkles className="w-5 h-5 text-accent/55" />}
        className="right-[9%] top-[14%]"
        scrollMultiplier={0.18}
        rotateMultiplier={0.9}
      />
      <FloatingElement
        icon={<Bird className="w-8 h-8 text-muted-foreground/40" />}
        className="right-[4%] top-[18%]"
        scrollMultiplier={0.15}
        rotateMultiplier={-0.2}
      />
      <FloatingElement
        icon={<Flower2 className="w-11 h-11 text-primary/35" />}
        className="right-[7%] top-[24%]"
        scrollMultiplier={0.45}
        rotateMultiplier={0.4}
      />
      <FloatingElement
        icon={<Leaf className="w-8 h-8 text-primary/50" />}
        className="right-[2%] top-[28%]"
        scrollMultiplier={0.32}
        rotateMultiplier={-0.55}
      />
      <FloatingElement
        icon={<TreeDeciduous className="w-9 h-9 text-primary/30" />}
        className="right-[8%] top-[34%]"
        scrollMultiplier={0.42}
        rotateMultiplier={0.12}
      />
      <FloatingElement
        icon={<Sparkles className="w-6 h-6 text-accent/45" />}
        className="right-[5%] top-[38%]"
        scrollMultiplier={0.12}
        rotateMultiplier={-0.85}
      />
      <FloatingElement
        icon={<Flower2 className="w-10 h-10 text-accent/40" />}
        className="right-[3%] top-[44%]"
        scrollMultiplier={0.5}
        rotateMultiplier={0.35}
      />
      <FloatingElement
        icon={<Leaf className="w-6 h-6 text-primary/45" />}
        className="right-[9%] top-[48%]"
        scrollMultiplier={0.24}
        rotateMultiplier={0.6}
      />
      <FloatingElement
        icon={<Bird className="w-7 h-7 text-muted-foreground/35" />}
        className="right-[6%] top-[54%]"
        scrollMultiplier={0.2}
        rotateMultiplier={0.18}
      />
      <FloatingElement
        icon={<Flower2 className="w-8 h-8 text-primary/40" />}
        className="right-[4%] top-[58%]"
        scrollMultiplier={0.36}
        rotateMultiplier={-0.48}
      />
      <FloatingElement
        icon={<Sparkles className="w-4 h-4 text-accent/60" />}
        className="right-[8%] top-[64%]"
        scrollMultiplier={0.14}
        rotateMultiplier={1}
      />
      <FloatingElement
        icon={<Leaf className="w-9 h-9 text-accent/35" />}
        className="right-[2%] top-[68%]"
        scrollMultiplier={0.4}
        rotateMultiplier={0.45}
      />
      <FloatingElement
        icon={<TreeDeciduous className="w-10 h-10 text-primary/25" />}
        className="right-[7%] top-[74%]"
        scrollMultiplier={0.48}
        rotateMultiplier={0.08}
      />
      <FloatingElement
        icon={<Flower2 className="w-12 h-12 text-primary/30" />}
        className="right-[5%] top-[78%]"
        scrollMultiplier={0.3}
        rotateMultiplier={-0.38}
      />
      <FloatingElement
        icon={<Leaf className="w-7 h-7 text-primary/50" />}
        className="right-[3%] top-[84%]"
        scrollMultiplier={0.35}
        rotateMultiplier={0.52}
      />
      <FloatingElement
        icon={<Sparkles className="w-5 h-5 text-accent/50" />}
        className="right-[9%] top-[88%]"
        scrollMultiplier={0.16}
        rotateMultiplier={-0.75}
      />
      <FloatingElement
        icon={<Bird className="w-6 h-6 text-muted-foreground/30" />}
        className="right-[6%] top-[94%]"
        scrollMultiplier={0.22}
        rotateMultiplier={0.22}
      />
      <FloatingElement
        icon={<Flower2 className="w-9 h-9 text-accent/45" />}
        className="right-[4%] top-[98%]"
        scrollMultiplier={0.44}
        rotateMultiplier={0.32}
      />

      {/* Center scattered sparkles and small elements */}
      <FloatingElement
        icon={<Sparkles className="w-4 h-4 text-accent/40" />}
        className="left-[15%] top-[15%]"
        scrollMultiplier={0.1}
        rotateMultiplier={1.2}
      />
      <FloatingElement
        icon={<Sparkles className="w-3 h-3 text-accent/50" />}
        className="right-[15%] top-[25%]"
        scrollMultiplier={0.12}
        rotateMultiplier={-1.1}
      />
      <FloatingElement
        icon={<Leaf className="w-5 h-5 text-primary/30" />}
        className="left-[12%] top-[45%]"
        scrollMultiplier={0.2}
        rotateMultiplier={0.7}
      />
      <FloatingElement
        icon={<Sparkles className="w-4 h-4 text-accent/45" />}
        className="right-[12%] top-[55%]"
        scrollMultiplier={0.14}
        rotateMultiplier={-0.95}
      />
      <FloatingElement
        icon={<Flower2 className="w-6 h-6 text-primary/25" />}
        className="left-[14%] top-[75%]"
        scrollMultiplier={0.25}
        rotateMultiplier={0.4}
      />
      <FloatingElement
        icon={<Sparkles className="w-3 h-3 text-accent/55" />}
        className="right-[14%] top-[85%]"
        scrollMultiplier={0.11}
        rotateMultiplier={1}
      />
    </div>
  );
};

export default ParallaxElements;
