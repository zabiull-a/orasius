import Layout from "@/components/layout/Layout";

const Terms = () => (
  <Layout>
    <section className="bg-primary py-16 md:py-24">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Terms & Conditions</h1>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl prose prose-slate">
        <p className="text-muted-foreground leading-relaxed">
          These terms and conditions govern your use of the ORASIUS website and services. By accessing or using our platform, you agree to be bound by these terms.
        </p>
        <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">1. Use of Services</h2>
        <p className="text-muted-foreground leading-relaxed">Our services are intended for professional development and training purposes. Users must provide accurate information when registering for programs or submitting inquiries.</p>
        <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">2. Intellectual Property</h2>
        <p className="text-muted-foreground leading-relaxed">All content, materials, and resources provided through our platform are the intellectual property of ORASIUS and may not be reproduced without written consent.</p>
        <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">3. Program Registration</h2>
        <p className="text-muted-foreground leading-relaxed">Registration for programs is subject to availability. ORASIUS reserves the right to modify schedules, content, or delivery formats as necessary.</p>
        <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">4. Limitation of Liability</h2>
        <p className="text-muted-foreground leading-relaxed">ORASIUS shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">5. Contact</h2>
        <p className="text-muted-foreground leading-relaxed">For questions regarding these terms, please contact us at info@orasius.com.</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
