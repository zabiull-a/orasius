import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required.")
    .max(120, "Name must be under 120 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email must be under 255 characters."),
  phone: z
    .string()
    .trim()
    .regex(/^\+[0-9][0-9\s\-()]{5,19}$/, "Please include your country code, e.g. +91 98765 43210."),
  company: z
    .string()
    .trim()
    .max(160, "Company name must be under 160 characters.")
    .optional()
    .or(z.literal("")),
  jobTitle: z
    .string()
    .trim()
    .max(120, "Job title must be under 120 characters.")
    .optional()
    .or(z.literal("")),
});

export interface RegistrationFormProps {
  trainingId?: string;
  trainingTitle?: string;
}

type FieldName = "fullName" | "email" | "phone" | "company" | "jobTitle";

const emptyForm: Record<FieldName, string> = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
};

const RegistrationForm = ({ trainingId, trainingTitle }: RegistrationFormProps) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = registrationSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("training_registrations").insert({
      training_id: trainingId ?? null,
      full_name: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company || null,
      job_title: parsed.data.jobTitle || null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("We couldn't submit your enquiry. Please try again or reach us on WhatsApp.");
      return;
    }

    toast.success(
      trainingTitle
        ? `Enquiry received for ${trainingTitle}. Our team will be in touch shortly.`
        : "Enquiry received. Our team will be in touch shortly."
    );
    setForm(emptyForm);
  };

  const fields: {
    name: FieldName;
    type: string;
    placeholder: string;
    required?: boolean;
    autoComplete?: string;
  }[] = [
    { name: "fullName", type: "text", placeholder: "Full Name", required: true, autoComplete: "name" },
    { name: "email", type: "email", placeholder: "Email Address", required: true, autoComplete: "email" },
    { name: "phone", type: "tel", placeholder: "Phone Number (with country code, e.g. +91 98765 43210)", required: true, autoComplete: "tel" },
    { name: "company", type: "text", placeholder: "Company / Organization", autoComplete: "organization" },
    { name: "jobTitle", type: "text", placeholder: "Job Title", autoComplete: "organization-title" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {fields.map((field) => (
        <div key={field.name}>
          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            required={field.required}
            autoComplete={field.autoComplete}
            maxLength={255}
            aria-invalid={Boolean(errors[field.name])}
            className={
              errors[field.name]
                ? "border-destructive focus-visible:ring-destructive"
                : undefined
            }
          />
          {errors[field.name] && (
            <p className="mt-1.5 text-sm text-destructive">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Submit Registration"
        )}
      </Button>
      <p className="text-xs opacity-70 text-center">
        Your details are used only to process your training enquiry.
      </p>
    </form>
  );
};

export default RegistrationForm;
