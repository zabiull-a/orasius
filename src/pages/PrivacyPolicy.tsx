import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => (
  <Layout>
    <section className="bg-primary py-20 md:py-24">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title"
        >
          Privacy Policy
        </motion.h1>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl prose prose-neutral">
        <p className="text-muted-foreground leading-relaxed premium-body">Last updated: March 2026</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1. Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed">We collect personal information you voluntarily provide when you enquire about our programs, register for training, or contact us. This includes your name, email address, phone number, job title, and organisation name.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2. How We Use Your Information</h2>
        <p className="text-muted-foreground leading-relaxed">Your information is used to respond to enquiries, deliver training services, send program-related communications, and improve our offerings. We do not sell or share your personal data with third parties for marketing purposes.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3. Data Retention</h2>
        <p className="text-muted-foreground leading-relaxed">We retain personal data only as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4. Your Rights</h2>
        <p className="text-muted-foreground leading-relaxed">You may request access to, correction of, or deletion of your personal data at any time by contacting us at info@orasius.com.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5. Contact</h2>
        <p className="text-muted-foreground leading-relaxed">For privacy-related enquiries, please contact us at info@orasius.com or call +1 786 2436792.</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
