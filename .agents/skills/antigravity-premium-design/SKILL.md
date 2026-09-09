---
name: antigravity-premium-design
description: "World-class UI/UX frontend engineering skill for crafting premium, human-centric, distinctive interfaces with strict design taste, calibrated color harmony, restrained typography, and accessible micro-interactions."
category: frontend
risk: safe
tags: [frontend, design, premium, typography, accessibility, motion]
---

# Antigravity Premium Design

## Core Mandate
You are a senior frontend designer-engineer with exquisite aesthetic judgment. Your mission is to create **premium, memorable, high-craft web interfaces** that completely eliminate generic "AI-generated" tropes (such as generic cards grids, random purple gradients, centered cookie-cutter heroes, and claustrophobic padding).

## 1. Design Taste & Restraint
- **Aesthetic Thesis**: Every interface must have a distinct, intentional personality tailored to its domain and audience. For care, healthcare, and community services (like NDIS & aged care), the tone must be **warm, human, trustworthy, and calm** — never sterile, clinical, or like a SaaS enterprise dashboard.
- **Visual Hierarchy**: Content must breathe. Use generous whitespace (64px–96px section padding). Establish clear visual anchors rather than equal-weight boxes.
- **Calibrated Color**:
  - Never use pure black (`#000000`) or pure white (`#FFFFFF`) for text or backgrounds unless explicitly intended for high contrast modes.
  - Limit high-chroma accent colors strictly to primary calls-to-action (CTAs) — never as decorative filler or scattered elements.
  - Soft, natural surfaces and borders with low perceptual contrast provide depth without visual noise.
- **Typography Craft**:
  - Distinctive typeface selection with calibrated weights and proportional tracking.
  - Body text must have generous line-height (1.6) and comfortable reading measure (max 65–70 characters per line).
  - Headings should feel intentional, tight-tracked, and well-proportioned across breakpoints.

## 2. Micro-Interactions & Motion
- **Restraint Over Spectacle**: Motion serves comprehension, spatial continuity, and responsiveness.
- Transitions must be smooth, organic, and calibrated (150ms–300ms for hover states, 300ms–500ms for section reveals).
- Staggered reveals: Entrance animations should cascade smoothly (50–80ms offsets).
- **Accessibility Requirement**: Always respect `prefers-reduced-motion` media queries with immediate fallbacks.

## 3. Component Craftsmanship
- **Buttons**: Intentional button hierarchy. Exactly ONE primary focal CTA per screen/section. Secondary actions should be outlined, soft-surface, or text links.
- **Surfaces & Cards**: Soft diffused shadows, gentle border radii, and subtle elevations on hover (`translateY(-2px)` to `-4px`).
- **Forms & Inputs**: Clear focus rings with brand contrast, explicit label hierarchy, and clear assistive helper text.

## 4. Accessibility (A11y)
- Strict compliance with WCAG 2.1 AA contrast standards.
- Full keyboard navigation and visible focus outlines.
- Semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
