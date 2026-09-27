# ShelfSense

AI demand forecasting and inventory planning for independent retailers and D2C brands.

This repository contains the ShelfSense marketing website:

| Route             | Purpose                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| `/`               | Landing page — hero, integrations, features, how it works, solutions, pricing, FAQ, CTA |
| `/contact`        | Book-a-demo form with client-side validation and toast feedback                         |
| `/privacy-policy` | Privacy policy with sticky section navigation                                           |
| `/terms`          | Terms of service                                                                        |
| `/sitemap.xml`    | Generated XML sitemap                                                                   |

A cookie consent banner (Accept all / Reject non-essential / Manage preferences) stores its choice in
`localStorage` and can be reopened from the footer.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, SSR, file-based routing)
- Tailwind CSS v4 + shadcn/ui components
- Zod for form validation, Sonner for toasts, Lucide icons

## Getting started

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm run format`.

## Customising

All brand details — company name, legal name, domain, contact and privacy emails, location — are in
[`src/lib/site.ts`](src/lib/site.ts). Update them before deploying. Also update the sitemap URL in
[`public/robots.txt`](public/robots.txt).

## Deploying on AWS

The site is server-rendered and deploys to **AWS Amplify Hosting** (SSR/compute):

1. Push this repository to GitHub (or CodeCommit, GitLab, Bitbucket).
2. In the Amplify console choose **Create new app → Host web app** and connect the repo.
3. Amplify picks up [`amplify.yml`](amplify.yml), which builds with `NITRO_PRESET=aws_amplify` and
   publishes the `.amplify-hosting` output.
4. Add your custom domain under **Hosting → Custom domains**; HTTPS is provisioned automatically.

To produce the same build locally: `NITRO_PRESET=aws_amplify npm run build`.
