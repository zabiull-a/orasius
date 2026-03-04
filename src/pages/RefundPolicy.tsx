import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const RefundPolicy = () => (
  <Layout>
    <section className="bg-primary py-20 md:py-24">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title"
        >
          Refund & Cancellation Policy
        </motion.h1>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl prose prose-neutral">
        <p className="text-muted-foreground leading-relaxed premium-body">Last updated: March 2026</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1. Cancellation by Participant</h2>
        <p className="text-muted-foreground leading-relaxed">Cancellations received more than 14 calendar days before the program start date will receive a full refund. Cancellations received between 7 and 14 days before the start date are eligible for a 50% refund or full credit toward a future program. Cancellations within 7 days of the program start date are non-refundable.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2. Substitutions</h2>
        <p className="text-muted-foreground leading-relaxed">Participant substitutions are accepted at any time before the program start date at no additional cost, subject to approval by ORASIUS.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3. Cancellation by ORASIUS</h2>
        <p className="text-muted-foreground leading-relaxed">ORASIUS reserves the right to cancel or reschedule a program due to insufficient enrolment or unforeseen circumstances. In such cases, registered participants will receive a full refund or the option to transfer to an alternative program.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4. Refund Processing</h2>
        <p className="text-muted-foreground leading-relaxed">Approved refunds will be processed within 14 business days to the original method of payment.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5. Contact</h2>
        <p className="text-muted-foreground leading-relaxed">For cancellation or refund requests, please contact info@orasius.com or call +1 786 2436792.</p>
      </div>
    </section>
  </Layout>
);

export default RefundPolicy;
