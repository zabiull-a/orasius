

# Production-Readiness Update: Complete Rebrand + Color System + Logo

## Overview

Apply all branding, color, logo, metadata, and cleanup changes in one pass. No layout changes.

---

## 1. Logo Integration

- Copy uploaded logo (`user-uploads://IMG_20260215_142916.png`) to `src/assets/orasius-logo.png`
- Copy to `public/favicon.png` for favicon use
- Replace text-only brand in **Navbar** and **Footer** with `<img>` tag using the logo
  - Alt text: "ORASIUS Corporate Training & Professional Development"
  - Navbar: height ~40px, auto width
  - Footer: height ~36px, auto width
- Update `index.html` to reference `/favicon.png`

---

## 2. Brand Rename: IELENT -> ORASIUS

All text replacements (16 instances across 9 files):

| File | Change |
|---|---|
| `src/pages/Index.tsx` (line 99) | "IELENT is a global..." -> "ORASIUS is a global..." |
| `src/pages/Index.tsx` (line 160) | "Why Choose IELENT" -> "Why Choose ORASIUS" |
| `src/pages/About.tsx` (line 62) | "we see IELENT evolving" -> "we see ORASIUS evolving" |
| `src/pages/Contact.tsx` (lines 148, 155) | "info@ielent.com" -> "info@orasius.com", "IELENT" -> "ORASIUS" |
| `src/pages/Terms.tsx` (lines 13, 18, 20, 22, 24) | All "IELENT" -> "ORASIUS", email -> "info@orasius.com" |
| `src/pages/CodeOfConduct.tsx` (line 13) | "IELENT reserves" -> "ORASIUS reserves" |
| `src/pages/Ethics.tsx` (line 10) | "IELENT operates" -> "ORASIUS operates" |
| `src/components/layout/Footer.tsx` (lines 10, 18, 59, 67) | Brand name + email -> ORASIUS / info@orasius.com |

---

## 3. SEO & Metadata (`index.html`)

- Title: "ORASIUS | Global Training & Professional Development"
- Meta description: "ORASIUS delivers industry-aligned training and professional development solutions for individuals and organizations worldwide."
- og:title and og:description: same as above
- Author: "ORASIUS"
- Remove all TODO comments
- Remove twitter @Lovable reference
- Add favicon link: `<link rel="icon" href="/favicon.png" type="image/png">`

---

## 4. Brand Color System

Update CSS custom properties in `src/index.css` to use the new palette:

- **Primary (#0056B3)**: `--primary: 210 100% 35%` (HSL equivalent of #0056B3)
- **Accent (#00A8E8)**: `--accent: 197 100% 45%` (HSL equivalent of #00A8E8)
- **White (#FFFFFF)**: already the background

Derived updates:
- `--ring`: match new primary
- `--accent-foreground`: dark text on cyan accent for contrast
- `--sidebar-primary`: match new primary
- Dark mode variants adjusted proportionally

Button hover states will automatically darken via the existing Tailwind utilities since they reference `hsl(var(--primary))`.

---

## 5. Code Cleanup

- **NotFound.tsx**: Remove `console.error` line and the `useLocation`/`useEffect` imports
- **Delete** `src/components/NavLink.tsx` (unused, imported nowhere)

---

## Files Changed Summary

| File | Action |
|---|---|
| `src/assets/orasius-logo.png` | New (copy from upload) |
| `public/favicon.png` | New (copy from upload) |
| `index.html` | Update metadata, add favicon |
| `src/index.css` | Update CSS custom properties for new color palette |
| `src/components/layout/Navbar.tsx` | Replace text brand with logo image |
| `src/components/layout/Footer.tsx` | Replace text brand with logo, update email |
| `src/pages/Index.tsx` | IELENT -> ORASIUS (2 instances) |
| `src/pages/About.tsx` | IELENT -> ORASIUS (1 instance) |
| `src/pages/Contact.tsx` | IELENT -> ORASIUS + email (2 instances) |
| `src/pages/Terms.tsx` | IELENT -> ORASIUS + email (5 instances) |
| `src/pages/CodeOfConduct.tsx` | IELENT -> ORASIUS (1 instance) |
| `src/pages/Ethics.tsx` | IELENT -> ORASIUS (1 instance) |
| `src/pages/NotFound.tsx` | Remove console.error |
| `src/components/NavLink.tsx` | Delete |

No layout, routing, or design structure changes.

