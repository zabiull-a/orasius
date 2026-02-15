import Layout from "@/components/layout/Layout";

const Ethics = () => (
  <Layout>
    <section className="bg-primary py-16 md:py-24">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Ethics & Compliance</h1>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          ORASIUS operates with a global outlook and is committed to ethical practices, data protection, quality assurance, and transparent communication. We continuously work to earn and maintain the trust of our learners, clients, and partners worldwide.
        </p>
        <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">Data Protection</h2>
        <p className="text-muted-foreground leading-relaxed">
          We take the protection of personal data seriously. Information collected through our platform is used solely for the purposes of program delivery, communication, and service improvement. We do not share personal data with third parties without explicit consent.
        </p>
        <h2 className="font-display text-xl font-semibold text-foreground mt-10 mb-3">Quality Assurance</h2>
        <p className="text-muted-foreground leading-relaxed">
          We apply rigorous quality assurance standards to every stage of the learning journey — from content design to delivery and learner engagement — ensuring our clients can rely on consistent excellence.
        </p>
      </div>
    </section>
  </Layout>
);

export default Ethics;
