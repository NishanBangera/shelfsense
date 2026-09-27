import { createFileRoute } from "@tanstack/react-router";
import { openCookiePreferences } from "@/components/cookie-consent";
import { LegalLayout, Block } from "@/components/legal-layout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${site.name}` },
      {
        name: "description",
        content: `How ${site.name} collects, stores and protects your data, including our commitment that your sales data is never shared or used to train models for other customers.`,
      },
      { property: "og:title", content: `Privacy Policy — ${site.name}` },
      {
        property: "og:description",
        content: "Data collection, customer data handling, retention, security and your rights.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

const sections = [
  { id: "collection", title: "Information we collect" },
  { id: "use", title: "How we use information" },
  { id: "customer-data", title: "Your store & sales data" },
  { id: "third-parties", title: "Service providers" },
  { id: "retention", title: "Retention & security" },
  { id: "rights", title: "Your rights" },
  { id: "cookies", title: "Cookies" },
  { id: "children", title: "Children's privacy" },
  { id: "changes", title: "Changes to this policy" },
  { id: "requests", title: "Contact us" },
];

function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="1 September 2026" sections={sections}>
      <p>
        This policy explains how {site.legalName} ("{site.name}", "we", "us") handles personal
        information when you visit {site.url.replace("https://", "")}, contact us, or use the{" "}
        {site.name} platform.
      </p>

      <Block id="collection" title="Information we collect">
        <p>
          <strong className="text-foreground">Information you give us.</strong> When you request a
          demo or contact us, we collect your name, email address, phone number (optional), store or
          brand name, sales platform, catalogue size and any message you write. When you create an
          account we also collect billing details, which are processed by our payment provider.
        </p>
        <p>
          <strong className="text-foreground">Information collected automatically.</strong> With
          your consent, we collect aggregated usage information such as pages visited, referring
          sites, browser type and approximate location derived from IP address.
        </p>
      </Block>

      <Block id="use" title="How we use information">
        <p>
          We use personal information to respond to enquiries, provide and support the service,
          process payments, send service-related notices, improve our website and product, and meet
          legal obligations. We send marketing emails only where you have opted in, and every email
          includes an unsubscribe link.
        </p>
        <p>
          We do not sell personal information, and we do not use automated decision-making that
          produces legal effects about you.
        </p>
      </Block>

      <Block id="customer-data" title="Your store & sales data">
        <p>
          Sales, product and inventory data you connect to {site.name} belongs to you. It is{" "}
          <strong className="text-foreground">
            stored in an isolated, encrypted partition for your account and used only to generate
            forecasts and recommendations for you
          </strong>
          . It is never sold, never shared with other customers, and never used to train models that
          serve other accounts.
        </p>
        <p>
          You can export your data as CSV at any time, and you can request permanent deletion when
          you close your account.
        </p>
      </Block>

      <Block id="third-parties" title="Service providers">
        <p>
          We use carefully selected providers to operate {site.name}, acting on our instructions
          under data processing agreements: Amazon Web Services for hosting, storage and machine
          learning infrastructure; a payment processor for billing; an email delivery provider for
          transactional messages; and, only with your consent, an analytics tool.
        </p>
        <p>A current list of sub-processors is available on request.</p>
      </Block>

      <Block id="retention" title="Retention & security">
        <p>
          Demo and contact enquiries are retained for up to 24 months. Account and sales data is
          retained while your account is active and deleted within 30 days of account closure,
          unless we are legally required to keep it longer.
        </p>
        <p>
          Data is encrypted in transit using TLS 1.2+ and at rest using AES-256. Access to
          production systems is role-based, least-privilege, protected by multi-factor
          authentication and logged.
        </p>
      </Block>

      <Block id="rights" title="Your rights">
        <p>
          Depending on where you live — including under India's Digital Personal Data Protection
          Act, the EU/UK GDPR and the California CCPA — you may have the right to access, correct,
          delete or port your personal information, to withdraw consent, and to object to or
          restrict certain processing. You also have the right to lodge a complaint with your local
          data protection authority.
        </p>
        <p>We respond to verified requests within 30 days.</p>
      </Block>

      <Block id="cookies" title="Cookies">
        <p>
          We use essential cookies for security and core functionality, and optional analytics and
          marketing cookies that load only with your consent. You can change your choice at any
          time.
        </p>
        <button
          type="button"
          onClick={openCookiePreferences}
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
        >
          Manage cookie preferences
        </button>
      </Block>

      <Block id="children" title="Children's privacy">
        <p>
          {site.name} is a business service and is not directed at children under 18. We do not
          knowingly collect personal information from children.
        </p>
      </Block>

      <Block id="changes" title="Changes to this policy">
        <p>
          We may update this policy from time to time. We will post the new version on this page
          and, for material changes, notify account holders by email before they take effect.
        </p>
      </Block>

      <Block id="requests" title="Contact us">
        <p>
          For privacy requests or questions, email{" "}
          <a
            href={`mailto:${site.privacyEmail}`}
            className="font-medium text-primary hover:underline"
          >
            {site.privacyEmail}
          </a>
          . Please include enough detail for us to verify your identity and locate your data.
        </p>
      </Block>
    </LegalLayout>
  );
}
