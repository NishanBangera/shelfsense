import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const sections = [
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "solutions", label: "Solutions" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchorHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" aria-hidden="true">
              <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="5.5" y="12" width="3" height="6" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="10.5" y="9" width="3" height="9" rx="1" fill="currentColor" opacity="0.8" />
              <path
                d="M15.5 16.5 18.5 5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="2 2.4"
              />
            </svg>
          </span>
          <span className="truncate text-base font-extrabold tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex lg:justify-self-center"
          aria-label="Sections"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={anchorHref(s.id)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book a Demo
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {sections.map((s) => (
              <a
                key={s.id}
                href={anchorHref(s.id)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {s.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
