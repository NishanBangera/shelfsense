import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, Block } from "@/components/legal-layout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Service — ${site.name}` },
      {
        name: "description",
        content: `The terms that govern your use of the ${site.name} website and platform.`,
      },
      { property: "og:title", content: `Terms of Service — ${site.name}` },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const sections = [
  { id: "acceptance", title: "Acceptance of terms" },
  { id: "service", title: "The service" },
  { id: "accounts", title: "Accounts" },
  { id: "billing", title: "Plans & billing" },
  { id: "data", title: "Your data" },
  { id: "acceptable-use", title: "Acceptable use" },
  { id: "forecasts", title: "Forecast disclaimer" },
  { id: "liability", title: "Limitation of liability" },
  { id: "termination", title: "Termination" },
  { id: "law", title: "Governing law" },
  { id: "contact", title: "Contact" },
];

function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="1 September 2026" sections={sections}>
      <Block id="acceptance" title="Acceptance of terms">
        <p>
          By accessing the {site.name} website or using the {site.name} platform, you agree to these
          Terms of Service. If you are using {site.name} on behalf of a business, you confirm you
          are authorised to accept these terms for that business.
        </p>
      </Block>

      <Block id="service" title="The service">
        <p>
          {site.name} provides software for demand forecasting, inventory planning and related
          analytics. We may add, change or remove features over time and will give reasonable notice
          of changes that materially reduce functionality of a paid plan.
        </p>
      </Block>

      <Block id="accounts" title="Accounts">
        <p>
          You are responsible for keeping your login credentials secure and for all activity under
          your account. Notify us promptly at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
            {site.email}
          </a>{" "}
          if you suspect unauthorised access.
        </p>
      </Block>

      <Block id="billing" title="Plans & billing">
        <p>
          Paid plans are billed in advance on a monthly or annual basis. Fees are non-refundable
          except where required by law. You can upgrade, downgrade or cancel at any time; changes
          take effect at the start of the next billing period.
        </p>
      </Block>

      <Block id="data" title="Your data">
        <p>
          You retain all rights to the data you upload or connect. You grant us a limited licence to
          process that data solely to provide the service to you. Our handling of personal
          information is described in our{" "}
          <Link to="/privacy-policy" className="font-medium text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </Block>

      <Block id="acceptable-use" title="Acceptable use">
        <p>
          You agree not to misuse the service, including by attempting to gain unauthorised access,
          interfering with its operation, reverse engineering it, uploading unlawful content, or
          using it to build a competing product.
        </p>
      </Block>

      <Block id="forecasts" title="Forecast disclaimer">
        <p>
          Forecasts and recommendations are statistical estimates based on the data available and
          are provided to support — not replace — your business judgement. We do not guarantee any
          particular sales, inventory or financial outcome.
        </p>
      </Block>

      <Block id="liability" title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, {site.legalName} will not be liable for any
          indirect, incidental or consequential damages, and our total liability for any claim will
          not exceed the fees you paid us in the 12 months before the claim arose.
        </p>
      </Block>

      <Block id="termination" title="Termination">
        <p>
          You may stop using the service at any time. We may suspend or terminate accounts that
          breach these terms. On termination you may export your data for 30 days, after which it
          will be deleted.
        </p>
      </Block>

      <Block id="law" title="Governing law">
        <p>
          These terms are governed by the laws of India, and disputes are subject to the exclusive
          jurisdiction of the courts of Bengaluru, Karnataka.
        </p>
      </Block>

      <Block id="contact" title="Contact">
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
            {site.email}
          </a>
          .
        </p>
      </Block>
    </LegalLayout>
  );
}
