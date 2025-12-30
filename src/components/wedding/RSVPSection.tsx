import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, MessageSquare, Check, X } from "lucide-react";
import { INITIAL_WISHES, type Wish } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { SectionReveal } from "./SectionReveal";

const STORAGE_KEY = "wedding_rsvp_wishes";

// Helper functions untuk localStorage
const loadWishesFromStorage = (): Wish[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert createdAt strings back to Date objects
      return parsed.map((wish: any) => ({
        ...wish,
        createdAt: new Date(wish.createdAt),
      }));
    }
  } catch (error) {
    console.error("Error loading wishes from storage:", error);
  }
  return INITIAL_WISHES;
};

const saveWishesToStorage = (wishes: Wish[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
  } catch (error) {
    console.error("Error saving wishes to storage:", error);
  }
};

export const RSVPSection = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    attendance: "attending" as Wish["attendance"],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Load wishes from localStorage on mount
  useEffect(() => {
    const loadedWishes = loadWishesFromStorage();
    setWishes(loadedWishes);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newWish: Wish = {
      id: Date.now().toString(),
      name: formData.name,
      message: formData.message,
      attendance: formData.attendance,
      createdAt: new Date(),
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    saveWishesToStorage(updatedWishes); // Save to localStorage
    setFormData({ name: "", message: "", attendance: "attending" });
    setIsSubmitting(false);

    toast({
      title: "Terima kasih!",
      description: "Ucapan Anda telah berhasil dikirim",
    });
  };

  const attendanceOptions = [
    { value: "attending", label: "Yes, I will attend", icon: Check },
    { value: "not_attending", label: "Sorry, I can't", icon: X },
  ];

  return (
    <SectionReveal variant="slideUp">
      <section id="rsvp" className="py-20 px-4 pb-32">
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
            RSVP
          </span>
          <h2 className="mt-2 font-heading text-3xl text-foreground">
            Send Your Wishes
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Please confirm your attendance and leave us your best wishes
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="wedding-card mb-8">
            {/* Name Input */}
            <div className="mb-4">
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                <User className="h-4 w-4 text-primary" />
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                <MessageSquare className="h-4 w-4 text-primary" />
                Your Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Write your wishes for the couple..."
                rows={4}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Attendance Options */}
            <div className="mb-6">
              <label className="mb-3 block text-sm font-medium text-foreground">
                Will you attend?
              </label>
              <div className="flex gap-3">
                {attendanceOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = formData.attendance === option.value;

                  return (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          attendance: option.value as Wish["attendance"],
                        })
                      }
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {option.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-medium text-primary-foreground transition-all hover:shadow-lg disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Wishes
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Wishes List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 flex items-center gap-2 font-heading text-xl text-foreground">
            <MessageSquare className="h-5 w-5 text-primary" />
            Wishes ({wishes.length})
          </h3>

          <div className="max-h-96 space-y-4 overflow-y-auto pr-2">
            <AnimatePresence>
              {wishes.map((wish, index) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg border border-border/50 bg-card p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                        {wish.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-foreground">
                        {wish.name}
                      </span>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        wish.attendance === "attending"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {wish.attendance === "attending" ? "Attending" : "Not Attending"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{wish.message}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
};