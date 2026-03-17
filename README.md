# Biodanza with Caroline

A marketing and booking website for Caroline Boyce, a certified Biodanza teacher running fortnightly classes in Pontypridd, South Wales.

Built as a freelance project and designed to reflect the warmth and accessibility of Biodanza — a practice combining music, movement, and human connection.

## Performance

Audited with Google Lighthouse — scoring 100 across all metrics on every page.

| Performance | Accessibility | Best Practices | SEO |
|:-----------:|:-------------:|:--------------:|:---:|
| 100 | 100 | 100 | 100 |

## Features

- Class and event listings with dynamic routing
- Booking flow with session management
- Contact page with direct email, phone, location and social links
- About page with scroll-driven animations and a testimonial carousel
- Entrance animations with `prefers-reduced-motion` support
- Structured data (JSON-LD) for SEO
- Fully responsive, accessible markup

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Carousel | Embla Carousel |
| Icons | Lucide React |
| Fonts | Playfair Display, Lato, Cormorant Garamond (Google Fonts) |

## Architecture Decisions

**Next.js (App Router)** was chosen over a simpler static site solution because the client has plans to grow the site progressively — adding a booking portal, contact forms, and other dynamic features over time. The App Router's support for server components, API routes, and server actions means these features can be built incrementally without re-architecting the project. Getting the site live quickly was the immediate priority, but full-stack capability was built in from the outset to keep future enhancement straightforward.

## Project Structure

```
app/              # Next.js App Router pages and layouts
components/
  layout/         # Global chrome — Header, Footer, Logo
  pages/          # Full-page components — AboutPage, Classes
  sections/       # Page-level sections — HomeHero, HomePageSections
  ui/             # Reusable primitives — Button, Section, Stack, etc.
  features/       # Domain components — booking, classes, events
data/             # Static content — classes, events
hooks/            # Custom hooks — useEntranceAnimation, useScrollFade
lib/              # Utilities — date helpers, slugify, data fetching
public/images/    # Optimised site imagery
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
