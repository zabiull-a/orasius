

# Visual Enhancement: Images and Animations

## Overview

Upgrade the IELENT website with professional Unsplash imagery and refined Framer Motion animations across all pages. All changes extend existing components -- no layout or routing rewrites.

---

## 1. Shared Animation Utilities

**File: `src/lib/animations.ts` (new)**

Create a centralized animation variants file to eliminate the duplicated `fadeUp` definition across 7+ page files.

Variants to include:
- `fadeUp` -- staggered fade + translateY (existing, centralized)
- `fadeIn` -- simple opacity fade
- `scaleOnHover` -- `whileHover` config for cards (scale 1.02, subtle shadow)
- `staggerContainer` -- parent variant with `staggerChildren` for grid layouts

All pages will import from this single file instead of redefining locally.

---

## 2. Smooth Scroll-to-Top on Navigation

**File: `src/components/layout/ScrollToTop.tsx` (new)**

A small component using `useLocation` + `useEffect` to scroll to top with `window.scrollTo({ top: 0, behavior: 'smooth' })` on route change.

**File: `src/App.tsx` (edit)**

Add `<ScrollToTop />` inside `<BrowserRouter>`.

---

## 3. Home Page (`src/pages/Index.tsx`)

### Hero Background Image
- Replace the solid `bg-primary` with an Unsplash corporate training image as a CSS background
- Add a dark overlay (`bg-primary/85`) for text readability
- Image: business conference / executive presentation theme
- Use `bg-cover bg-center` with the image URL

### Cards: Hover Micro-Interactions
- Focus Area cards: add `whileHover={{ y: -4, boxShadow: "..." }}` via Framer Motion
- Why Choose cards: same subtle lift effect
- Trainer Spotlight cards: add scale(1.02) + shadow on hover

### CTA Section
- Add a subtle background image (muted boardroom / collaboration) with an overlay, replacing the plain white section

---

## 4. About Page (`src/pages/About.tsx`)

### Hero
- Add background image (global professionals / diverse team) with dark overlay, matching the Home hero pattern

### Vision & Mission Section
- Add a side image alongside the text using a 2-column layout on desktop: text left, image right
- Image: executive coaching / mentorship visual

---

## 5. What We Do Page (`src/pages/WhatWeDo.tsx`)

### Hero
- Background image with overlay (workshop / training room setting)

### Service Sections
- Each of the 3 service blocks (Training Programs, Webinars, Professional Events) gets a relevant image on the right side of the existing 2-column grid
- Images: classroom training, virtual meeting setup, networking event
- Images use `rounded-lg overflow-hidden` with lazy loading

---

## 6. Programs Page (`src/pages/Programs.tsx`)

### Hero
- Background image with overlay (professional development / learning environment)

### Program Cards
- Add `whileHover={{ y: -4 }}` and a smooth shadow transition to each card
- Add a small decorative image strip or gradient accent at the top of each card based on category

### Program Detail View
- Add a hero-style image banner below the header area relevant to the program category

---

## 7. Trainers Page (`src/pages/Trainers.tsx`)

### Hero
- Background image (diverse professionals in a corporate setting)

### Trainer Cards
- Add hover lift animation (`whileHover={{ y: -6, transition: { duration: 0.2 } }}`)
- The existing placeholder avatar circles remain -- they will be replaced when real trainer photos are provided

---

## 8. Why Choose Us Page (`src/pages/WhyChooseUs.tsx`)

### Hero
- Background image with overlay

### Differentiator Cards
- Add hover lift + shadow micro-interaction

### Partner CTA Section
- Add a subtle background image (handshake / partnership visual) with overlay

---

## 9. Contact Page (`src/pages/Contact.tsx`)

### Hero
- Background image with overlay (office / global connection visual)

No other changes needed -- the form and sidebar are already clean.

---

## 10. Global CSS Enhancements (`src/index.css`)

Add smooth scrolling to the HTML element:
```
html { scroll-behavior: smooth; }
```

Add a utility class for image overlays:
```
.hero-overlay {
  @apply relative overflow-hidden;
}
.hero-overlay::before {
  content: '';
  @apply absolute inset-0 bg-primary/80 z-[1];
}
.hero-overlay > * {
  @apply relative z-[2];
}
```

---

## Image Strategy

All images will be sourced from Unsplash via direct URLs (`images.unsplash.com`) with size parameters for optimization (e.g., `?w=1920&q=80` for heroes, `?w=800&q=75` for section images).

Image themes:
| Location | Theme |
|---|---|
| Home hero | Executive conference / keynote |
| Home CTA | Collaborative boardroom |
| About hero | Diverse global professionals |
| About vision | Mentorship / coaching |
| What We Do hero | Workshop setting |
| What We Do services | Classroom, virtual session, networking |
| Programs hero | Learning environment |
| Trainers hero | Professional team |
| Why Choose Us hero | Corporate excellence |
| Contact hero | Global connectivity |

All images use `loading="lazy"` where rendered as `<img>` elements, or are applied as CSS backgrounds for hero sections.

---

## Technical Summary

| Change | Type |
|---|---|
| `src/lib/animations.ts` | New file -- shared animation variants |
| `src/components/layout/ScrollToTop.tsx` | New file -- scroll-to-top on navigation |
| `src/App.tsx` | Edit -- add ScrollToTop component |
| `src/index.css` | Edit -- smooth scrolling + overlay utility |
| `src/pages/Index.tsx` | Edit -- hero image, card hover animations, CTA image |
| `src/pages/About.tsx` | Edit -- hero image, vision section image |
| `src/pages/WhatWeDo.tsx` | Edit -- hero image, service section images |
| `src/pages/Programs.tsx` | Edit -- hero image, card hover effects |
| `src/pages/Trainers.tsx` | Edit -- hero image, card hover effects |
| `src/pages/WhyChooseUs.tsx` | Edit -- hero image, card hover, CTA image |
| `src/pages/Contact.tsx` | Edit -- hero image |

No new dependencies required. Framer Motion is already installed and used throughout.

