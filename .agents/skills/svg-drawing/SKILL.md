---
name: svg-drawing
description: Iterative hand-drawn SVG vector drawing and doodle technique using fffuel.co/dddoodle reference library. Use when creating loose, organic SVG doodles, arrows, underlines, circles, scribbles, or decorative vector line art.
---

# SVG Drawing & Doodle Accents Skill

An iterative technique and reference guide for crafting clean, organic, hand-drawn SVG vector doodles and line art.

## 1. The Core Technique: Organic Hand-Drawn SVG Workflow

Writing SVGs from scratch often leads to either sterile geometric shapes or overly complex, chaotic coordinates. To achieve a warm, hand-drawn look:

1. **Keep ViewBoxes Tight & Normalized**:
   - Use small, intuitive viewBoxes (e.g. `viewBox="0 0 160 40"` for underlines, `viewBox="0 0 80 80"` for loops and arrows).
2. **Use Smooth Organic Beziers (`C` and `Q`)**:
   - Prefer Quadratic (`Q`) and Cubic (`C`) curve commands over rigid `L` (line) commands.
   - Avoid robotic straight lines. Introduce subtle, human asymmetry (e.g. slight overshoot on an underline, an unclosed spiral loop).
3. **Consistent Stroke Styling**:
   - `fill="none"`
   - `stroke="currentColor"` or specified brand token
   - `stroke-linecap="round"`
   - `stroke-linejoin="round"`
   - `stroke-width="1.8"` to `2.5` (scaled to viewBox)

---

## 2. Reference Asset Pack: `fffuel.co/dddoodle`

Always reference **`fffuel.co/dddoodle`** (120+ free, CC-licensed hand-drawn SVG illustrations) as the baseline standard for loose, human-like vectors:

- **Loose, imperfect, single-stroke line art**: Vectors should feel hand-inked on paper, not mathematically extruded.
- **5 Core Doodle Categories**:
  1. **Arrows**: Curved, lively directional arrows pointing toward CTAs or action items.
  2. **Underlines**: Gentle wave, double-stroke scribble, or single arched underlines highlighting a specific hero word.
  3. **Circles / Loops**: Imperfect oval halos or lasso loops drawing focus to badges, avatars, or key metrics.
  4. **Sparkles & Stars**: 4-point soft diamond stars and asterisks adding delight to key milestones.
  5. **Scribbles & Brackets**: Organic brackets and squiggles framing section transitions.

---

## 3. Design Rules for Doodle Accents

When applying doodle accents to websites and applications (as codified in `DESIGN.md`):

1. **Sparingly Applied**:
   - **Max 2–3 per page**. Doodles are punctuation marks, not background wallpaper.
2. **Whitespace Accent Only**:
   - **Never place a doodle over text or images**. Position doodles in the whitespace framing the elements.
3. **Calibrated Color Harmony**:
   - Use **Brand primary** (e.g. deep teal `#2E6B5E`) or **Accent coral** (e.g. `#E4572E`) only.
   - **Never mix both colors on a single doodle**.
4. **Placement Priority**:
   - **Underline scribble**: Directly beneath the secondary display accent word in heroes.
   - **Curved arrow**: In the margin pointing toward primary CTA buttons.
   - **Focus circle**: Encircling a reassurance pill or badge.
   - **Section transition**: Soft delimiter between narrative chapters.

---

## 4. Production-Ready SVG Doodle Templates

### A. Hand-Drawn Wavy Underline (Hero Word Accent)
```html
<!-- Hand-drawn double underline scribble beneath an accent word -->
<svg class="doodle-underline" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M4 14 C42 6, 88 18, 156 10" stroke="#2E6B5E" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M12 19 C52 14, 96 21, 148 16" stroke="#2E6B5E" stroke-width="1.8" stroke-linecap="round" opacity="0.75"/>
</svg>
```

### B. Curved Hand-Drawn Arrow Pointing to CTA
```html
<!-- Hand-drawn curved arrow pointing to button -->
<svg class="doodle-arrow" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Shaft with natural arc -->
  <path d="M8 8 C18 36, 42 46, 62 42" stroke="#E4572E" stroke-width="2.2" stroke-linecap="round"/>
  <!-- Arrowhead wings -->
  <path d="M48 38 L63 43 L56 28" stroke="#E4572E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### C. Imperfect Focus Loop / Circle
```html
<!-- Hand-drawn imperfect focus loop around badge or callout -->
<svg class="doodle-circle" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M60 6 C24 6, 6 22, 6 36 C6 52, 28 64, 60 64 C94 64, 114 50, 114 36 C114 20, 92 8, 54 8" 
        stroke="#2E6B5E" stroke-width="2" stroke-linecap="round" stroke-dasharray="240" stroke-dashoffset="0"/>
</svg>
```

### D. Hand-Drawn Star / Sparkle
```html
<!-- Soft 4-point organic sparkle -->
<svg class="doodle-sparkle" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M16 2 Q16 16, 2 16 Q16 16, 16 30 Q16 16, 30 16 Q16 16, 16 2 Z" 
        fill="#F4B320" stroke="#F4B320" stroke-width="1.2" stroke-linejoin="round"/>
</svg>
```
