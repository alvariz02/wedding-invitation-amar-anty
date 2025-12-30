import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift, CreditCard } from "lucide-react";
import { WEDDING_CONFIG } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { SectionReveal } from "./SectionReveal";

export const GiftSection = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = async (accountNumber: string, bank: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedAccount(accountNumber);
      toast({
        title: "Copied!",
        description: `${bank} account number copied to clipboard`,
      });
      setTimeout(() => setCopiedAccount(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  return (
    <SectionReveal variant="slideRight">
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
            WEDDING GIFT
          </span>
          <h2 className="mt-2 font-heading text-3xl text-foreground">
            Send Your Gift
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Your presence is the greatest gift. However, if you'd like to honor
            us with a gift, we've provided the following options.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <Gift className="h-5 w-5 text-primary" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>

        {/* Gift Cards */}
        <div className="space-y-4">
          {WEDDING_CONFIG.giftAccounts.map((account, index) => (
            <motion.div
              key={account.accountNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="wedding-card">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <CreditCard className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-medium text-foreground">
                        {account.bank}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {account.accountName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-muted/30 px-4 py-3">
                  <span className="font-mono text-lg font-medium text-foreground">
                    {account.accountNumber}
                  </span>
                  <motion.button
                    onClick={() => handleCopy(account.accountNumber, account.bank)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {copiedAccount === account.accountNumber ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Thank You Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="font-heading text-lg italic text-muted-foreground">
            Thank you for your kindness and generosity 💝
          </p>
        </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
};