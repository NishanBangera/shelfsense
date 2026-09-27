import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  LineChart,
  PackageCheck,
  BellRing,
  Store,
  Tags,
  ShieldCheck,
  Check,
  Plug,
  Cpu,
  Sparkles,
  Shirt,
  Pill,
  ShoppingBasket,
  Laptop,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

const title = `${site.name} — AI Demand Forecasting & Inventory Planning for Retailers`;
const description = `${site.name} predicts what will sell, where and when — so independent retailers and D2C brands reorder the right stock, cut dead inventory and never miss a sale.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  {
    icon: LineChart,
    title: "SKU-level demand forecasts",
    body: "Daily forecasts for every product and location, with confidence ranges that account for seasonality, holidays and promotions.",
    points: ["14–90 day horizons", "Festival & holiday calendars", "Confidence intervals"],
  },
  {
    icon: PackageCheck,
    title: "Smart reorder planning",
    body: "Recommended order quantities that balance supplier lead times, minimum order sizes and your cash on hand.",
    points: ["Lead-time aware", "MOQ & case packs", "One-click purchase orders"],
  },
  {
    icon: BellRing,
    title: "Stockout & overstock alerts",
    body: "Get notified before a best-seller runs dry or slow movers start tying up working capital.",
    points: ["WhatsApp & email alerts", "Dead-stock detection", "Weekly digest"],
  },
  {
    icon: Store,
    title: "Multi-store balancing",
    body: "See which outlet or warehouse is over-stocked and move inventory before it becomes a markdown.",
    points: ["Store-to-store transfers", "Warehouse view", "Channel split"],
  },
  {
    icon: Tags,
    title: "Promotion impact modelling",
    body: "Simulate a discount before you run it and see the expected uplift in units, revenue and margin.",
    points: ["What-if scenarios", "Cannibalisation check", "Margin guardrails"],
  },
];

const steps = [
  {
    n: "01",
    icon: Plug,
    title: "Connect your store",
    body: "Link Shopify, WooCommerce, your POS or upload a CSV. Two years of sales history is ideal; three months is enough to start.",
  },
  {
    n: "02",
    icon: Cpu,
    title: "Models train on your data",
    body: "We train a forecasting model per catalogue on AWS, tuned to your seasonality, pricing and local events.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Act on recommendations",
    body: "Review reorder suggestions, approve purchase orders and get alerts — from the dashboard or your phone.",
  },
  {
    n: "04",
    icon: LineChart,
    title: "Forecasts keep improving",
    body: "Every sale feeds back in. Models retrain nightly, and accuracy is tracked openly on your dashboard.",
  },
];

const segments = [
  {
    icon: Shirt,
    tag: "Fashion & apparel",
    title: "Size-and-colour level planning",
    body: "Forecast demand by variant so you reorder the sizes that sell, not the ones that end up on the sale rack.",
  },
  {
    icon: ShoppingBasket,
    tag: "Grocery & FMCG",
    title: "Fresh stock without the waste",
    body: "Short-horizon daily forecasts for perishables, with shelf-life aware ordering to reduce spoilage.",
  },
  {
    icon: Pill,
    tag: "Pharmacy & health",
    title: "Essential items always in stock",
    body: "Safety-stock recommendations for critical SKUs and early warnings on seasonal spikes.",
  },
  {
    icon: Laptop,
    tag: "D2C & e-commerce",
    title: "Plan launches and sales events",
    body: "Model the impact of campaigns and marketplace sales so fulfilment keeps up with demand.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    cadence: "forever",
    blurb: "For single-store retailers getting started with forecasting.",
    features: ["1 store or channel", "Up to 500 SKUs", "14-day forecasts", "Weekly email digest"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$49",
    cadence: "per month",
    blurb: "For growing brands that need reorder planning and alerts.",
    features: [
      "Up to 5 stores or channels",
      "Up to 10,000 SKUs",
      "90-day forecasts",
      "Reorder planning & POs",
      "WhatsApp & email alerts",
    ],
    cta: "Book a demo",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "annual plan",
    blurb: "For multi-location chains and distributors.",
    features: [
      "Unlimited stores & SKUs",
      "Promotion modelling",
      "API & ERP integration",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

const faqs = [
  {
    q: "How much sales history do I need?",
    a: "Three months of daily sales is enough to produce useful forecasts. With 12–24 months, the models also learn yearly seasonality such as festivals and end-of-season sales.",
  },
  {
    q: "Which systems do you integrate with?",
    a: "Shopify, WooCommerce and Square out of the box, plus CSV upload for any POS or ERP. Scale customers can use our REST API for custom integrations.",
  },
  {
    q: "Is my sales data used to train models for other customers?",
    a: "No. Each customer's data is stored in an isolated, encrypted partition on AWS and is only used to train models for that customer's own account.",
  },
  {
    q: "Where is my data hosted?",
    a: "ShelfSense runs on Amazon Web Services. Data is encrypted in transit and at rest, and customers can choose an India or EU region.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly plans can be cancelled at any time from your settings, and you can export all of your data as CSV before you leave.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="grid-mesh absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "var(--gradient-accent)", opacity: 0.2 }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-3.5 py-1.5 text-xs font-medium text-ink-foreground/75">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" /> AI inventory planning
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Know what will sell <span className="text-gradient">before it sells</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-ink-foreground/70 sm:text-lg">
              {site.name} forecasts demand for every product in every store, then tells you exactly
              what to reorder and when — so you stop losing sales to empty shelves and cash to dead
              stock.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-ink-foreground/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink-foreground/10"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-foreground/55">
              Free plan available · No credit card required · Set up in under 15 minutes
            </p>
          </div>
          <ForecastVisual />
        </div>

        {/* Integrations bar */}
        <div className="relative border-t border-ink-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-ink-foreground/55">
              <span>Shopify</span>
              <span>WooCommerce</span>
              <span>Square</span>
              <span>Zoho Inventory</span>
              <span>Tally</span>
              <span>CSV / Excel</span>
            </div>
            <p className="flex items-center gap-2 text-sm text-ink-foreground/70">
              <ShieldCheck className="h-4 w-4 text-lime" /> Built on Amazon Web Services
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
        <SectionHead
          eyebrow="Features"
          title="Everything you need to plan inventory with confidence"
          body="Spreadsheets and gut feel can't keep up with thousands of SKUs. ShelfSense does the maths every night so you can focus on running the store."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="surface-card rounded-2xl p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground">{f.body}</p>
              <ul className="mt-5 space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="surface-card flex flex-col justify-between rounded-2xl bg-ink p-7 text-ink-foreground">
            <div>
              <h3 className="text-lg font-bold">See it on your own data</h3>
              <p className="mt-2.5 text-sm text-ink-foreground/70">
                Share a sales export and we'll send back a free 30-day forecast and a list of SKUs
                at risk of stocking out.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime"
            >
              Get a free forecast <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHead
            eyebrow="How it works"
            title="From sales history to smarter orders in four steps"
            body="No data team required. If you can export a sales report, you can use ShelfSense."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="surface-card relative rounded-2xl bg-background p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-primary">{s.n}</span>
                  <s.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
        <SectionHead
          eyebrow="Solutions"
          title="Built for the way your category sells"
          body="Different products move differently. ShelfSense adapts its models and recommendations to your vertical."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {segments.map((c) => (
            <article key={c.title} className="surface-card flex gap-5 rounded-2xl p-7">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {c.tag}
                </p>
                <h3 className="mt-2 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why / platform */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHead
            eyebrow="Why ShelfSense"
            title="Enterprise-grade forecasting, priced for independent retail"
            body="Large chains have had demand-planning teams for years. We package the same techniques — gradient-boosted and deep-learning forecasters running on AWS — into a tool any store owner can use."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [
                "Explainable",
                "Every forecast shows the drivers behind it — seasonality, trend, promotions and events.",
              ],
              [
                "Private by design",
                "Your data is isolated per account, encrypted, and never shared or sold.",
              ],
              [
                "Works offline-first",
                "Upload CSVs from any POS. No rip-and-replace of the tools you already use.",
              ],
              [
                "Transparent accuracy",
                "Forecast error is tracked and shown on your dashboard, week by week.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="surface-card rounded-2xl bg-background p-6">
                <h3 className="text-base font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
        <SectionHead
          eyebrow="Pricing"
          title="Simple plans that grow with your catalogue"
          body="Start free with one store. Upgrade when you're ready for reorder planning and alerts."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`surface-card flex flex-col rounded-2xl p-7 ${
                p.featured ? "border-primary bg-ink text-ink-foreground" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-lime px-2.5 py-1 text-xs font-semibold text-ink">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-4">
                <span className="text-4xl font-extrabold">{p.price}</span>{" "}
                <span
                  className={`text-sm ${p.featured ? "text-ink-foreground/60" : "text-muted-foreground"}`}
                >
                  {p.cadence}
                </span>
              </p>
              <p
                className={`mt-3 text-sm ${p.featured ? "text-ink-foreground/70" : "text-muted-foreground"}`}
              >
                {p.blurb}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-sm ${
                      p.featured ? "text-ink-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    <Check
                      className={`h-4 w-4 shrink-0 ${p.featured ? "text-lime" : "text-primary"}`}
                    />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  p.featured ? "bg-lime text-ink" : "border border-border hover:bg-accent"
                }`}
              >
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prices in USD, excluding applicable taxes. Annual billing saves two months.
        </p>
      </section>

      {/* Product specs */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            ["15 min", "From sign-up to first forecast"],
            ["Nightly", "Model retraining on fresh sales"],
            ["90 days", "Maximum forecast horizon"],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-2xl border border-border p-8 text-center">
              <p className="text-gradient text-4xl font-extrabold sm:text-5xl">{stat}</p>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHead
            eyebrow="FAQ"
            title="Questions retailers ask us"
            body="Can't find what you're looking for? Our team replies to every message within one business day."
          />
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-background px-6"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="surface-card grid gap-6 rounded-3xl bg-ink p-10 text-ink-foreground sm:grid-cols-[1.4fr_auto] sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Stop guessing. Start forecasting.
            </h2>
            <p className="mt-2 text-sm text-ink-foreground/70">
              Book a 20-minute demo and see ShelfSense running on a sample of your own sales data.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink hover:opacity-90"
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-muted-foreground">{body}</p>
    </div>
  );
}

/** Animated hero chart: historical sales bars followed by a forecast line with a confidence band. */
function ForecastVisual() {
  const history = [52, 60, 48, 70, 66, 82, 74, 90, 86, 104];
  const forecast = [104, 112, 108, 126, 138, 132];
  const barW = 16;
  const gap = 8;
  const baseY = 220;
  const scale = 1.3;
  const x0 = 24;
  const fx0 = x0 + (history.length - 1) * (barW + gap) + barW / 2;
  const step = 26;

  const pts = forecast.map((v, i) => [fx0 + i * step, baseY - v * scale] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ");
  const upper = pts.map(([x, y], i) => [x, y - 6 - i * 4] as const);
  const lower = pts.map(([x, y], i) => [x, y + 6 + i * 4] as const);
  const band =
    upper.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ") +
    " " +
    [...lower]
      .reverse()
      .map(([x, y]) => `L${x},${y}`)
      .join(" ") +
    " Z";

  return (
    <div className="relative mx-auto mb-10 w-full max-w-lg">
      <div className="rounded-3xl border border-ink-foreground/10 bg-ink-foreground/[0.04] p-5 backdrop-blur">
        <div className="flex items-center justify-between text-xs text-ink-foreground/60">
          <span className="font-semibold text-ink-foreground/85">Linen shirt · Blue · M</span>
          <span className="font-mono">Units / week</span>
        </div>
        <svg
          viewBox="0 0 440 240"
          className="mt-3 w-full"
          role="img"
          aria-label="Chart of weekly sales history followed by a rising demand forecast"
        >
          <defs>
            <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--emerald)" />
              <stop offset="100%" stopColor="var(--emerald)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {[60, 110, 160, 210].map((y) => (
            <line
              key={y}
              x1="0"
              x2="440"
              y1={y}
              y2={y}
              stroke="currentColor"
              strokeOpacity="0.08"
            />
          ))}
          {history.map((v, i) => (
            <rect
              key={i}
              x={x0 + i * (barW + gap)}
              y={baseY - v * scale}
              width={barW}
              height={v * scale}
              rx="4"
              fill="url(#bar)"
              style={{
                transformOrigin: `0 ${baseY}px`,
                animation: `rise 0.8s cubic-bezier(.2,.7,.2,1) ${i * 0.06}s both`,
              }}
            />
          ))}
          <line
            x1={fx0}
            x2={fx0}
            y1="20"
            y2={baseY}
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeDasharray="3 5"
          />
          <text x={fx0 + 6} y="30" fontSize="10" fill="currentColor" opacity="0.55">
            Today
          </text>
          <path d={band} fill="var(--lime)" opacity="0.14" />
          <path
            d={line}
            fill="none"
            stroke="var(--lime)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray="1"
            style={{ animation: "draw-line 1.4s ease-out 0.7s both" }}
          />
          {pts.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3.5"
              fill="var(--lime)"
              style={{ animation: `soft-pulse 2.8s ease-in-out ${1.4 + i * 0.2}s infinite` }}
            />
          ))}
        </svg>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-ink-foreground/60">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-emerald" /> Actual sales
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-0.5 w-3 rounded bg-lime" /> Forecast
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-3 rounded-sm bg-lime/20" /> 80% confidence
          </span>
        </div>
      </div>

      <div className="absolute -bottom-14 right-4 flex max-w-[15rem] items-start gap-3 rounded-2xl border border-ink-foreground/10 bg-ink p-4 shadow-2xl sm:-right-6">
        <BellRing className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
        <div>
          <p className="text-xs font-semibold">Reorder 140 units by Friday</p>
          <p className="mt-1 text-xs text-ink-foreground/60">
            Projected stockout in 9 days at current sell-through.
          </p>
        </div>
      </div>
    </div>
  );
}
