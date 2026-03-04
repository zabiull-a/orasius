import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const DataSecurity = () => (
  <Layout>
    <section className="bg-primary py-20 md:py-24">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title"
        >
          Data Security & Processing
        </motion.h1>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl prose prose-neutral">
        <p className="text-muted-foreground leading-relaxed premium-body">Last updated: March 2026</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1. Data Security Measures</h2>
        <p className="text-muted-foreground leading-relaxed">ORASIUS implements appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. These measures include encrypted data transmission, access controls, and regular security reviews.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2. Data Processing</h2>
        <p className="text-muted-foreground leading-relaxed">Personal data is processed for the purposes of delivering training services, managing registrations, and communicating with clients. Processing is carried out in accordance with applicable data protection regulations.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3. Third-Party Processors</h2>
        <p className="text-muted-foreground leading-relaxed">Where we engage third-party service providers (such as email platforms or payment processors), we ensure they meet appropriate data security standards through contractual agreements.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4. Data Breach Notification</h2>
        <p className="text-muted-foreground leading-relaxed">In the event of a data breach that poses a risk to individuals, we will notify affected parties and relevant authorities in accordance with applicable regulations.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5. Contact</h2>
        <p className="text-muted-foreground leading-relaxed">For data security enquiries, please contact info@orasius.com.</p>
      </div>
    </section>
  </Layout>
);

export default DataSecurity;
