import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import globalImage from "@/lib/global-image";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  organization: z.string().trim().max(200).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
  };

  return (
    <Layout>
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `url(${globalImage})` }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wide premium-hero-title">Contact Us</h1>
            <p className="mt-4 text-primary-foreground/80 text-lg md:text-xl premium-body">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
            <p className="text-muted-foreground mb-8 leading-relaxed premium-body">
                We work with organisations to design capability development and professional training programs tailored to their needs. Use this form to book a discovery call, request a program brochure, or discuss corporate training requirements.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="h-20 w-20 text-primary mb-4" />
                  <h2 className="font-display text-2xl font-semibold text-foreground">Thank You!</h2>
                  <p className="mt-2 text-muted-foreground premium-body">Your message has been received. We'll get back to you shortly.</p>
                  <Button className="mt-6 px-8 py-3 text-base" onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", phone: "", organization: "", subject: "", message: "" }); }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" value={form.fullName} onChange={(e) => handleChange("fullName", e.target.value)} />
                      {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization / Company</Label>
                      <Input id="organization" value={form.organization} onChange={(e) => handleChange("organization", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="px-8 py-3 text-base">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-8 rounded-lg bg-secondary">
                <h3 className="font-semibold text-foreground mb-4 text-lg">Get in Touch</h3>
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-0.5 text-primary" />
                    <span>+1 786 2436792</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5 text-primary" />
                    <span>info@orasius.com</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We respond to all enquiries within <strong className="text-foreground">one business day</strong>. For urgent requests, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
