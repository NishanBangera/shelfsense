import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteFooter({ onManageCookies }: { onManageCookies?: () => void }) {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-extrabold tracking-tight">{site.name}</p>
          <p className="max-w-xs text-sm text-ink-foreground/65">
            AI demand forecasting and inventory planning for independent retailers and D2C brands.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Product</p>
          <ul className="space-y-2 text-sm text-ink-foreground/65">
            {productLinks.map((l) => (
              <li key={l.href}>
                <a className="hover:text-ink-foreground" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Legal</p>
          <ul className="space-y-2 text-sm text-ink-foreground/65">
            <li>
              <Link className="hover:text-ink-foreground" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink-foreground" to="/terms">
                Terms of Service
              </Link>
            </li>
            <li>
              <button type="button" onClick={onManageCookies} className="hover:text-ink-foreground">
                Cookie Settings
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-sm text-ink-foreground/65 hover:text-ink-foreground"
          >
            <Mail className="h-4 w-4" /> {site.email}
          </a>
          <p className="flex items-center gap-2 text-sm text-ink-foreground/65">
            <MapPin className="h-4 w-4" /> {site.location}
          </p>
          <Link
            to="/contact"
            className="inline-flex text-sm font-semibold text-lime hover:underline"
          >
            Book a demo →
          </Link>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 px-5 py-5 text-center text-xs text-ink-foreground/50 lg:px-8">
        © {site.year} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
