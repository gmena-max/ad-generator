# Nano Banana 2 — Mente Futbol Background Image Prompts

> 20 social media statics for @mentefutbol.oficial
> This file contains ONLY background image prompts for Gemini. All copy lives in `src/data/presets/mf.ts`.
> Format: 1080x1350 (4:5 aspect ratio) for Instagram feed

---

## Master Instructions

Copy this block at the start of EVERY Gemini generation session after importing the GitHub repo:

```
You have access to the ad-generator codebase for Mente Futbol (https://github.com/gmena-max/ad-generator). Use it as reference for brand colors and visual style:

- Brand colors: see src/data/clients.ts (mf object)
- Visual rules: see BRAND-BOOK.md (colors, effects)

RULES:
- Generate ONLY the background visual. DO NOT include any text, letters, numbers, words, logos, or watermarks.
- Leave clean negative space where indicated for text overlay in post-production.
- Dark theme ALWAYS (background #0B0C10, near-black)
- Cyan #5BE0FF for accents only — NEVER as background or large fills
- Aspect ratio: 4:5 (1080x1350 pixels)
- Style: premium, cinematic, moody — like Champions League broadcast graphics
- Subtle dot grid texture in background (tiny dots at very low opacity)
- Keep critical visual interest within the center 1080x1080 safe zone (top/bottom 135px are bleed)
```

---

## Section 1: Photo Pieces (5 pieces — no Gemini needed)

These use real Jeaustin photos. All photos are in `assets/jeaustin-photos/drive-review/` numbered 01–51. Upload directly to the ad-generator — no AI generation required.

| # | Local File | What it shows | Template | Variant | Preset |
|---|-----------|---------------|----------|---------|--------|
| 1 | `drive-review/08-38399b83.jpg` | Night match, gray shirt, floodlights, walking on pitch | CoachHero | A | mf-01 |
| 11 | `drive-review/19-c7fef01e.jpg` | Night celebration, clapping above head, stadium crowd | CoachHero | C | mf-11 |
| 14 | `drive-review/28-IMG_0224.jpg` | Championship trophy in hand, J. CAMPOS #29 jersey, gold medal | StatInsight | C | mf-14 |
| 16 | `drive-review/44-wa-2042a.jpg` | FIFA CWC Japan 2005, medals, FIFA banner visible | StatInsight | A | mf-16 |
| 19 | `drive-review/20-cdbe0385.jpg` | Thumbs up, smiling, packed night stadium | StatInsight | A | mf-19 |

**Workflow:** Open ad-generator → select template + variant + preset → upload photo from `drive-review/` → export.

---

## Section 2: AI Background Prompts (15 pieces)

Each prompt below generates a background image only. Paste Master Instructions first, then the individual prompt.

---

### Piece #2 — QuoteCard A

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Quote card — text will be centered vertically on the image. Leave the center area clean for text overlay. Atmospheric texture at edges.

VISUAL CONCEPT: Stadium tunnel entrance atmosphere. Subtle radial cyan glow emanating from center, fading into dark vignette at edges. Moody, atmospheric — like standing in a tunnel looking toward the pitch lights.
```

---

### Piece #3 — PillarHighlight A

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Educational card — content will be centered vertically. Keep background texture subtle so text remains legible over the entire image.

VISUAL CONCEPT: Abstract neural network pattern in cyan (#5BE0FF) on near-black (#0B0C10). Synaptic connections firing — abstract glowing nodes connected by thin lines. NOT anatomical — purely abstract, elegant, minimal. Subtle dot grid texture underneath.
```

---

### Piece #4 — StatInsight A

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Stat card — a large stat number will be placed upper-center, with supporting text below. Leave the upper-center area relatively clean for the stat overlay. Atmospheric texture around edges.

VISUAL CONCEPT: Aerial view of a football pitch at night, pitch lines glowing in subtle cyan, atmospheric fog rolling across. Dark, moody, data-driven feel.
```

---

### Piece #5 — QuestionHook A

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Question card — text will be centered vertically. Leave center clean for text overlay. Atmospheric texture at edges.

VISUAL CONCEPT: Stadium tunnel perspective — long dark corridor with a single source of cyan light at the far end. Dramatic depth, like a player about to walk onto the pitch. Atmospheric, moody, tension-filled.
```

---

### Piece #6 — PillarHighlight B

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned card — content will sit on the left side. Keep the left half relatively clean for text. Visual texture can be heavier on the right side.

VISUAL CONCEPT: Tactical formation dots connected by thin cyan lines — like a coach's whiteboard but dark and premium. Abstract dots in formation shapes (4-3-3, 4-4-2) with connecting lines. Clean, strategic, intelligent feel.
```

---

### Piece #7 — QuoteCard C

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Card-in-card quote — a centered card will overlay the image. Keep the center clean for the card. Atmospheric texture at edges and corners.

VISUAL CONCEPT: A football resting on dark grass, lit by a single cyan rim light from behind. Bokeh light spots in the background. Intimate, contemplative mood.
```

---

### Piece #8 — StatInsight B

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned stat — content will sit on the left side. Visual texture can be heavier on the right. Leave the left half clean for stat and text overlay.

VISUAL CONCEPT: Horizontal light streaks in varying shades of cyan, creating a timeline feel — like light trails from moving vehicles at night but abstract. Lines sweep left to right suggesting progression through time. Dark, sleek, forward-moving.
```

---

### Piece #9 — QuestionHook B

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Asymmetric layout — question text will go top-left, answer card bottom-right. Leave top-left area clean for large text. A dark card will overlay the bottom-right.

VISUAL CONCEPT: Youth football boots on a dark field, a single cyan light source creating dramatic shadows. The boots suggest hesitation, not movement — one foot slightly ahead of the other. Intimate, emotional, parent-perspective.
```

---

### Piece #10 — PillarHighlight C

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Split layout — top 48% will have a pillar badge and hook text on the atmospheric background. Bottom 52% will be covered by a dark card overlay. Focus visual interest in the top half.

VISUAL CONCEPT: Abstract heartbeat/pulse line in cyan — a single horizontal EKG-like line that starts strong on the left and fades/weakens toward the right, suggesting fatigue. The line has a glow effect. Dark, atmospheric background. Sports science meets premium design.
```

---

### Piece #12 — PillarHighlight A

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Educational card — content will be centered vertically with four bullet cards. Keep background texture very subtle so text and cards remain legible.

VISUAL CONCEPT: Four wireframe icons at very low opacity in the background: a football (Técnica), a chess piece (Táctica), a lightning bolt (Físico), and a brain (Sicológico). Abstract, geometric, minimal. The icons are barely visible — just enough to add visual texture.
```

---

### Piece #13 — QuestionHook C

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Minimal gradient — text will be centered vertically. Diagonal gradient background with subtle texture. Keep the center clean for a single bold statement overlay.

VISUAL CONCEPT: A football dissolving into cyan particles — the ball on the left is solid, and toward the right it breaks apart into glowing cyan dots/particles that scatter and fade. Represents technique without mentality falling apart. Abstract, high-end, dynamic.
```

---

### Piece #15 — QuoteCard B

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Side-accent quote — content will be left-aligned with a vertical cyan accent line on the left edge. Leave the left-center area clean for text overlay. Visual depth on the right side.

VISUAL CONCEPT: One-point perspective corridor — a long symmetric hallway/tunnel with walls converging to a single vanishing point. Cyan light at the far end, creating a dramatic depth effect. The corridor represents the mental journey — consistency leads forward. Dark, architectural, powerful.
```

---

### Piece #17 — StatInsight B

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned stat — content will sit on the left side. Visual texture can be heavier on the right. Leave the left half clean for stat and text overlay.

VISUAL CONCEPT: Three national flags (Costa Rica, Puerto Rico, Honduras) abstracted into flowing fabric ribbons with cyan tint, intertwining against a near-black background. The flags are ghostly, almost translucent — more texture than literal. Suggests international reach without being overly literal.
```

---

### Piece #18 — StatInsight C

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Glowing circle stat — a large glowing circle with a stat number will be centered. Leave clean space around the center circle. Text will appear below the circle.

VISUAL CONCEPT: A constellation of 200+ small glowing cyan dots scattered across the dark background, each representing a player formed. Some dots are brighter (the stars), connected by faint cyan lines. Feels like a galaxy of talent. Expansive, legacy-focused.
```

---

### Piece #20 — StatInsight B

```
Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned stat — content will sit on the left side. Visual texture can be heavier on the right. Leave the left half clean for stat and text overlay.

VISUAL CONCEPT: Split composition — left side shows a brain outline in cyan wireframe, right side shows a football in matching wireframe. They're connected by a pulsing cyan line at the center. The brain is larger/brighter, visually dominant. Represents that the mental side outweighs the physical. Dark, scientific, premium.
```

---

## Quick Reference Table

| # | Source | Template | Variant | Visual Concept |
|---|--------|----------|---------|----------------|
| 1 | **PHOTO:** Night match, floodlights, gray shirt | CoachHero | A | Night stadium authority walk |
| 2 | AI | QuoteCard | A | Stadium tunnel, radial cyan glow |
| 3 | AI | PillarHighlight | A | Abstract neural network in cyan |
| 4 | AI | StatInsight | A | Aerial pitch, lines glowing cyan |
| 5 | AI | QuestionHook | A | Stadium tunnel perspective |
| 6 | AI | PillarHighlight | B | Tactical formation dots + lines |
| 7 | AI | QuoteCard | C | Football on dark grass, cyan rim |
| 8 | AI | StatInsight | B | Horizontal cyan light streaks |
| 9 | AI | QuestionHook | B | Youth boots, single cyan light |
| 10 | AI | PillarHighlight | C | Heartbeat pulse fading right |
| 11 | **PHOTO:** Night celebration, clapping, stadium | CoachHero | C | Victory celebration, crowd |
| 12 | AI | PillarHighlight | A | 4 wireframe icons at low opacity |
| 13 | AI | QuestionHook | C | Football dissolving into particles |
| 14 | **PHOTO:** Trophy + J.CAMPOS #29 jersey, medal | StatInsight | C | Championship trophy in hand |
| 15 | AI | QuoteCard | B | One-point perspective corridor |
| 16 | **PHOTO:** FIFA CWC Japan 2005, medals, banner | StatInsight | A | FIFA Japan 2005 medal ceremony |
| 17 | AI | StatInsight | B | Abstracted flag ribbons, cyan tint |
| 18 | AI | StatInsight | C | Constellation of glowing dots |
| 19 | **PHOTO:** Thumbs up, packed night stadium | StatInsight | A | Night match confidence, crowd |
| 20 | AI | StatInsight | B | Brain + football wireframe, connected |

---

## Workflow

### Photo pieces (5 pieces: #1, #11, #14, #16, #19)

1. Open ad-generator (`localhost:3000`)
2. Select template + variant + preset
3. Upload photo from `assets/jeaustin-photos/drive-review/` (see Section 1 table)
4. Export as PNG (1080x1350)

### AI background pieces (15 pieces)

1. Open Gemini (gemini.google.com) → image generation mode
2. Click "Import code" → paste `https://github.com/gmena-max/ad-generator` → Import
3. Paste Master Instructions block
4. Paste individual piece prompt
5. Generate 2-3 variations, pick best
6. Download at highest resolution → save to `raw/`
7. Open ad-generator → select template + variant + preset → upload AI background → export

### Test Batch

Start with pieces #2, #4, and #5 (QuoteCard A, StatInsight A, QuestionHook A) to validate:
- [ ] Background has NO text, numbers, letters, logos, or watermarks
- [ ] Color palette correct (near-black + cyan, no warm colors)
- [ ] Premium/cinematic mood (not cartoonish)
- [ ] Clean negative space where indicated for text overlay
- [ ] Resolution/quality sufficient

## Output File Naming

```
assets/statics/2026-03/ig-feed/mf-01-coach-hero.png
assets/statics/2026-03/ig-feed/mf-02-quote-mejores.png
assets/statics/2026-03/ig-feed/mf-03-pillar-sicologico.png
assets/statics/2026-03/ig-feed/mf-04-stat-87.png
assets/statics/2026-03/ig-feed/mf-05-question-nervioso.png
assets/statics/2026-03/ig-feed/mf-06-pillar-tactica.png
assets/statics/2026-03/ig-feed/mf-07-quote-piernas.png
assets/statics/2026-03/ig-feed/mf-08-stat-30.png
assets/statics/2026-03/ig-feed/mf-09-question-hijo.png
assets/statics/2026-03/ig-feed/mf-10-pillar-fisico.png
assets/statics/2026-03/ig-feed/mf-11-coach-talento.png
assets/statics/2026-03/ig-feed/mf-12-pillar-4pilares.png
assets/statics/2026-03/ig-feed/mf-13-question-tecnica.png
assets/statics/2026-03/ig-feed/mf-14-stat-8.png
assets/statics/2026-03/ig-feed/mf-15-quote-constancia.png
assets/statics/2026-03/ig-feed/mf-16-stat-mundial.png
assets/statics/2026-03/ig-feed/mf-17-stat-selecciones.png
assets/statics/2026-03/ig-feed/mf-18-stat-jugadores.png
assets/statics/2026-03/ig-feed/mf-19-stat-finales.png
assets/statics/2026-03/ig-feed/mf-20-stat-70.png
```
