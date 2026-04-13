# Plumbing Shop React

Marketing website for "معرض أحمد بدوي" (plumbing and sanitary tools showroom).
The app is Arabic-first, RTL, mobile-friendly, and focused on converting visitors into direct contact through phone/WhatsApp and store visits.

## Project Goal

- Present the showroom as a trusted local supplier.
- Showcase product categories and partner brands.
- Make contact fast and obvious (sticky header links + floating WhatsApp CTA).
- Provide location and map embed for in-person visits.

## What The App Contains

The main page is assembled in [src/pages/Index.tsx](src/pages/Index.tsx) and rendered through routing in [src/App.tsx](src/App.tsx).

Homepage sections:

- Header with responsive navigation and mobile menu.
- Hero section with image background and 2 primary actions.
- Brands grid showing trusted suppliers.
- Product cards with images and short Arabic descriptions.
- "Why us" section with credibility highlights.
- Location and contact section with embedded Google Map.
- Footer with address, phone number, and copyright.
- Fixed WhatsApp button for instant chat.

## Architecture Overview

- Framework: React 18 + TypeScript.
- Build tool: Vite.
- Styling: Tailwind CSS + CSS variables in [src/index.css](src/index.css).
- UI primitives: shadcn/ui + Radix.
- Routing: React Router (`/` and fallback `*`).
- Async/query foundation: React Query provider is already configured in [src/App.tsx](src/App.tsx) for future API integration.
- Notifications/tooltips: Sonner + custom toaster and tooltip providers.

## Routing

- `/` renders the full landing page.
- `*` renders [src/pages/NotFound.tsx](src/pages/NotFound.tsx).

## Design System Notes

- RTL document direction is set in [index.html](index.html).
- Main palette and gradients are defined as CSS variables in [src/index.css](src/index.css).
- Arabic font stack is configured with Cairo via Google Fonts in [src/index.css](src/index.css).
- Reusable utility classes include `hero-overlay` and `section-gradient`.

## Data Model (Current)

This version is mostly static-content driven:

- Product data is currently hardcoded in [src/components/ProductsSection.tsx](src/components/ProductsSection.tsx).
- Brand list is hardcoded in [src/components/BrandsSection.tsx](src/components/BrandsSection.tsx).
- Contact phone and WhatsApp URL are hardcoded in:
	- [src/components/WhatsAppButton.tsx](src/components/WhatsAppButton.tsx)
	- [src/components/LocationSection.tsx](src/components/LocationSection.tsx)
	- [src/components/Footer.tsx](src/components/Footer.tsx)

If you plan to make the content editable, these are the first files to move into a shared config or CMS/API.

## Setup

Requirements:

- Node.js 18+
- npm 9+

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Important: this project uses `npm run dev` (not `npm start`).

## Scripts

- `npm run dev`: start Vite dev server
- `npm run build`: create production build
- `npm run build:dev`: production build using development mode
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint checks
- `npm test`: run Vitest once
- `npm run test:watch`: run Vitest in watch mode

## Build And Deploy

Create production build:

```bash
npm run build
```

Generated output is placed in `dist/`.

## Favicon / Branding

- Browser tab icon is set in [index.html](index.html) and points to `public/tap.png`.
- Public static assets live under `public/`.

## Folder Structure

```text
src/
	components/      Page sections + reusable UI
	components/ui/   shadcn/ui primitives
	pages/           Route-level pages
	hooks/           Custom React hooks
	lib/             Shared utility helpers
	assets/          Imported images
	test/            Test setup and sample tests
public/            Static files served as-is
```