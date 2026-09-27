import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, Loader2, CheckCircle2, LineChart } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Book a Demo — ${site.name}` },
      {
        name: "description",
        content: `Tell ${site.name} about your store and catalogue. We'll show you forecasts on your own sales data and reply within one business day.`,
      },
      { property: "og:title", content: `Book a Demo — ${site.name}` },
      {
        property: "og:description",
        content: "Get a personalised demo and a free 30-day forecast for your store.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().min(2, "Enter your store or brand name").max(120),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[+\d\s()-]*$/, "Enter a valid phone number")
    .optional(),
  platform: z.string().min(1, "Select your sales platform"),
  skus: z.string().min(1, "Select your catalogue size"),
  details: z.string().trim().max(2000).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as keyof Errors;
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    form.reset();
    setSubmitted(true);
    toast.success("Thanks — we'll be in touch within one business day.");
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Book a demo</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Tell us a little about your store. We'll walk you through {site.name} on a sample of your
          own sales data — and answer any questions about pricing, integrations or data privacy.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        {submitted ? (
          <div className="rounded-3xl border border-border p-8 text-center sm:p-12">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-5 text-2xl font-bold">Request received</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Thanks for your interest in {site.name}. Someone from our team will email you within
              one business day to schedule your demo.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-flex rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-accent"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                autoComplete="name"
                error={errors.name}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                error={errors.email}
                required
              />
              <Field
                label="Store or brand name"
                name="company"
                autoComplete="organization"
                error={errors.company}
                required
              />
              <Field
                label="Phone (optional)"
                name="phone"
                type="tel"
                autoComplete="tel"
                error={errors.phone}
              />
              <SelectField
                label="Sales platform"
                name="platform"
                error={errors.platform}
                options={["Shopify", "WooCommerce", "Square", "Offline POS", "ERP / Other"]}
              />
              <SelectField
                label="Number of SKUs"
                name="skus"
                error={errors.skus}
                options={["Under 500", "500 – 2,000", "2,000 – 10,000", "10,000+"]}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="details" className="text-sm font-medium">
                Anything else we should know?
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                maxLength={2000}
                className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25"
                placeholder="Number of stores, biggest inventory headaches, tools you use today…"
              />
              {errors.details && (
                <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>
              )}
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              By submitting, you agree to our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              . We'll only use your details to respond to this request.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Sending…" : "Request demo"}
            </button>
          </form>
        )}

        <aside className="space-y-5">
          <div className="rounded-3xl border border-border p-6">
            <h2 className="text-base font-bold">Direct contact</h2>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {site.location}
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                We reply within one business day
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-ink p-6 text-ink-foreground">
            <LineChart className="h-6 w-6 text-lime" />
            <h2 className="mt-4 text-base font-bold">Free 30-day forecast</h2>
            <p className="mt-2 text-sm text-ink-foreground/70">
              Attach a sales export to your reply email and we'll send back a 30-day forecast plus
              the SKUs most at risk of stocking out — no commitment required.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        maxLength={255}
        aria-invalid={!!error}
        className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label} <span className="text-primary">*</span>
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        aria-invalid={!!error}
        className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
