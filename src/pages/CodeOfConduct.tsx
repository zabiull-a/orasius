import Layout from "@/components/layout/Layout";

const CodeOfConduct = () => (
  <Layout>
    <section className="bg-primary py-16 md:py-24">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Code of Conduct</h1>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          We are committed to maintaining a respectful, inclusive, and professional learning environment. All participants, trainers, speakers, and partners are expected to act with integrity, respect diverse perspectives, and engage constructively.
        </p>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Harassment, discrimination, disruptive behavior, or unethical conduct will not be tolerated. IELENT reserves the right to take appropriate action in response to any violations of this code, including removal from programs or events.
        </p>
      </div>
    </section>
  </Layout>
);

export default CodeOfConduct;
