# DESIGN.md — Hopesway Redesign

> **Core Rule / Typography Directive:**
> Secondary display font — "Fraunces" (italic, weight 400-500) from Google Fonts, used ONLY for pull-quotes, section numbers, and one accent word per hero — never for body copy.

---

## Brand Tone
"A very nice, conversational, yet professional coffee shop barista, without any coffee reference."

## Official Motto & Brand Tagline
**"Your care, your way"** — use this ownable tagline site-wide instead of generic dignity or abstract independence language.

## Copy tone & Anti-Repetition Rules
- Write like a warm, capable person explaining things clearly to a friend. Plain English only.
- **Strict Anti-Repetition Rule:** Never overuse the word "real" or any single adjective/crutch word repetitively.
- No corporate phrases ("empowering," "dignity and choice," "person-centred," "leading provider").
- No repeated abstract values language.
- Avoid em-dashes; use periods or commas instead. Keep sentences short.
- Every claim must be concrete, specific, and grounded.

## Hero Copy (Canonical Baseline)
- **H1:** "Support that actually shows up for you."
- **Body:** "Hopesway connects Queensland families with NDIS and aged care support workers who take the time to get to know you. Dedicated support, familiar faces, zero jargon."

## Confirmed Real Entities & Trust Data (NDIS Commission Verified)
- **Two Registered Entities:**
  1. **Hopesway Care** (ABN: 54 425 985 105)
  2. **Hopesway Support Services** (ABN: 41 659 270 765)
- **NDIS Registration #:** 4050172088
- **Head Office:** Pimpama QLD 4209
- **Phone:** 1300 694 673
- **Primary Support Hubs:** South East Queensland (Pimpama, Coomera, Ormeau, Upper Coomera, Jimboomba, Beenleigh, Logan) & North Queensland (Townsville, Charters Towers, Ingham, Ayr).
- **Official Registered Support Categories:**
  - Supported Independent Living (SIL)
  - Support Coordination
  - Specialised Disability Accommodation (SDA)
  - Household Tasks
  - Community Nursing Care
  - Assist-Travel/Transport
  - Therapeutic Supports
  - Daily Tasks/Shared Living
  - Development-Life Skills

## SEO / AEO / GEO Architecture
- **Title Tag Formula:** `[Service / Subject] in [Location] | Hopesway NDIS & Aged Care` (e.g., `Supported Independent Living in Pimpama & Gold Coast | Hopesway`).
- **Structured Data (Schema.org):**
  - `LocalBusiness` + `MedicalOrganization` with real ABNs, phone, and service locations.
  - `FAQPage` schema markup for all question-and-answer sections to maximize Google Rich Snippets and AI citations (ChatGPT, Perplexity, Gemini).
- **GoHighLevel (GHL) Webchat Widget:**
  - Injected before `</body>` across all pages:
    `<script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="YOUR_WIDGET_ID"></script>`
- **Instagram Feed:**
  - Embedded via SnapWidget pulling from `@hopeswaycare` in a responsive rounded-card grid.

## Visual Theme
Warm, human, trustworthy. Care-sector site for NDIS and aged care families.
Not clinical, not corporate SaaS. Think "a caring organisation a stressed family trusts in 5 seconds."

## Logo & Brand Palette
Recreated from the official Hopesway Tree of Life emblem:
- **Logo Top Leaf (Ruby Red):** `#EE2737`
- **Logo Left Leaf (Leaf Green):** `#468C2C`
- **Logo Right Leaf (Sunlit Gold):** `#F4B320`
- **Logo Trunk / Branches (Warm Espresso):** `#392E2D`
- **Brand Primary (Deep Teal):** `#2E6B5E`
- **Brand Light (Mint wash):** `#EAF4F1`
- **Brand Dark (Deep Pine):** `#1A4A3F`
- **Accent CTA (Warm Coral):** `#E4572E` | **Hover:** `#C94420`
- **Background:** `#FAF7F4` (warm sand)
- **Surface / Cards:** `#FFFFFF`
- **Borders:** `#E5E0D8`
- **Text Primary:** `#1C2B2B` | **Text Muted:** `#6B7280`

## Logo Geometry & Favicon
- **Favicon:** `favicon.svg` (served as `image/svg+xml`)
- Three diamond leaves (squares rotated 45°, `rx=10`) crowned upon a central trunk line (`stroke-width=8`, `stroke-linecap="round"`) with two 45° branches extending into the left and right foliage.

## Creative Biophilic Line Art System (Psychological Grounding)
Subtle, high-craft, hand-drawn vector line art weaving the logo's motif and brand colors throughout the UI. Designed specifically around biophilic psychological principles (Prospect & Refuge, Soft Fascination, and Resonant Breathing):
1. **Hero Section ("Prospect & Refuge"):**
   - Left Margin: Native Australian eucalyptus branch line art (`.hero-branch-art`) in leaf green and gold.
   - Background Typography: Calming dawn sunburst breaking through hinterland canopy (`.hero-canopy-art`), symbolizing a fresh, hopeful morning for anxious families.
   - Centerpiece Artwork: "The Living Tree of Support" (`.hero-art-card`) — solar radiance rings (`#F4B320`), hinterland contours, cupped caring hands cradling the trunk (`#392E2D`), and blooming diamond canopy with delicate botanical leaf veins.
2. **Meandering Living River Divider:** Flowing stream currents, river stepping stones, and water reeds connecting Hero to Care Picker.
3. **Care Picker ("Pathway Through the Garden"):**
   - Topographic elevation contours (`.picker-topo-art`) evoking Mount Tamborine and the Gold Coast hinterland.
   - Flanking silver wattle and native fern fronds peaceful framing the choice.
   - NDIS card: Protective bower canopy with rooted trunk and ruby heart.
   - Aged Care card: Caring hands cradling a sunlit seedling.
4. **Services Grid ("Living Forest Canopy & Root Foundation"):**
   - Overhead: Interlocking forest canopy branches in green `#468C2C` and gold `#F4B320`.
   - Underneath: Grounded mycorrhizal root network in espresso `#392E2D` and teal `#2E6B5E`.
   - 6 Bespoke Service Watermarks: Metaphors for each care category (sheltered home, navigation astrolabe, coastal respite sunrise, flourishing seedling, circle of community, scenic winding road).
5. **Team Section ("Grounded Community"):**
   - Panoramic Gold Coast Hinterland ridge with calm gliding birds in flight (peace and perspective).
   - Flanking Australian golden wattle floral sprigs.
   - Team member avatars encircled by botanical laurel leaf wreaths with logo-colored diamond nodes.
6. **Stats Strip ("Dendrochronology & Vitality"):**
   - Concentric ancient tree growth rings radiating from the flanks.
   - Ascending botanical saplings growing between each of the 4 stats columns.
7. **Testimonials ("The Quiet Sanctuary"):**
   - Concentric tranquil pond ripple rings (`.testimonials-ripples-art`) stimulating parasympathetic vagus nerve relaxation.
   - Arching protective bower overhead framing the quotes.
8. **Final CTA ("Safe Haven"):**
   - Protective shelter canopy with radiating morning hope rays pointing directly to the contact actions.
9. **Footer ("Rooted in the Earth"):**
   - Earth strata and deep living roots line art (`.footer-roots-art`) grounding the entire page.
10. **Biophilic Calming Motion:**
    - 6-second resonant breathing cadence (`@keyframes natureBreathe`, `@keyframes ripplePulse`) synchronized to natural heart-rate variability.
    - Strict `prefers-reduced-motion: reduce` fallback on all elements.

## Typography
- **Primary Font:** Outfit (Google Fonts, weights 400/500/600/700)
  - Body: 18px / line-height 1.6 / max 68-70 chars per line
  - Headings: tracking-tight (`letter-spacing: -0.02em`), bold
- **Secondary Display Font:** Fraunces (Google Fonts, italic, weights 400/500)
  - Used ONLY for pull-quotes, section numbers, and one accent word per hero
  - NEVER for body copy, buttons, or navigation
- Never use pure black (`#000000`) or pure white (`#FFFFFF`).

## Spacing
Base unit: 8px. Scale: 8 / 16 / 24 / 32 / 48 / 64 / 96

## Background Shader
Living organic ambient mesh & tactile grain:
- GPU-accelerated canvas shader (`#ambientShader`) rendering slow-drifting warm sand, mint, teal, and coral ambient light nodes
- Filtered through a fine SVG fractal noise grain overlay (`feTurbulence`)
- Full `prefers-reduced-motion` pause support

## Component Rules
- ONE primary CTA per page/section in coral (`#E4572E`), all others outlined or text
- Cards: 16px border-radius, soft box-shadow (`0 2px 12px rgba(0,0,0,0.07)`), hover lifts (`translateY(-3px)` to `-4px`), 200ms ease
- Buttons: 12px border-radius, 200ms transition on hover
- Sections: generous padding (64–96px top/bottom), never cramped
- **Icons:** Inline SVGs only (`stroke="#2E6B5E"`, 24x24 viewBox, stroke-width 2) — **NO emojis anywhere**

## Motion
- Subtle only. Scroll-triggered fade-up on cards (300-400ms, staggered 80ms each).
- Hover states on all interactive elements (150-200ms).
- Full `prefers-reduced-motion: reduce` fallback on all animations.

## Accessibility
WCAG 2.1 AA minimum contrast throughout. All interactive elements keyboard-navigable with semantic tags and aria states.

## Doodle accents
Use hand-drawn SVG doodle accents sparingly (max 2-3 per page) near headlines, CTAs, and section transitions — underline scribbles, circle highlights, small arrows pointing at buttons. Source style from fffuel.co/dddoodle: loose, imperfect, single-stroke line art. Color: brand green #2E6B5E or coral #E4572E only, never both on one doodle. Never place a doodle over text or images — accent the whitespace around them.
