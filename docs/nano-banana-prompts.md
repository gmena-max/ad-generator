# Nano Banana 2 — Mente Futbol Statics Generation Prompts

> 15 social media statics for @mentefutbol.oficial
> Source of truth: this repo's code (presets, templates, brand book)
> Format: 1080x1350 (4:5 aspect ratio) for Instagram feed

---

## Master Instructions

Copy this block at the start of EVERY generation session after importing the GitHub repo:

```
You have access to the ad-generator codebase for Mente Futbol (https://github.com/gmena-max/ad-generator). Use it as your single source of truth:

- Brand colors: see src/data/clients.ts (mf object)
- Copy text: see src/data/presets/mf.ts (use EXACT text, including accents)
- Visual layout: see src/components/templates/ (React component structure)
- Visual rules: see BRAND-BOOK.md (colors, typography, effects)

RULES:
- Dark theme ALWAYS (background #0B0C10, near-black)
- Cyan #5BE0FF for accents only — NEVER as background or large fills
- CTA blue #2076FF for action buttons/pills only
- Text must be EXACTLY as written in presets/mf.ts — copy character by character, including all accents (á, é, í, ó, ú, ñ)
- Include "mentefutbol.com" (lowercase) at bottom
- Aspect ratio: 4:5 (1080x1350 pixels)
- Style: premium, cinematic, moody — like Champions League broadcast graphics
- Font style: clean modern sans-serif (Geist-like) — NOT decorative, NOT handwritten
- Subtle dot grid texture in background (tiny dots at very low opacity)
- Brand bar at very bottom: thin dark strip with "mentefutbol.com" centered
- DO NOT use stock photography of real people — use abstract/atmospheric visuals only (unless a reference photo is attached)
- Keep all critical content within the center 1080x1080 safe zone (top/bottom 135px are bleed for FB crops)
```

---

## Prompt Template

Each prompt below follows this structure:
1. Paste the Master Instructions block
2. Paste the individual prompt for the specific piece
3. Generate 2-3 variations, pick the best

---

## Piece #1 — Intro al DT (CoachHero)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Coach Hero — Full-bleed photo background with text overlay at bottom.
LAYOUT: Photo occupies top 65%. Bottom gradient fades to near-black. Text sits on the dark bottom area. Credential badges in a horizontal row. Blue CTA pill button below text.

VISUAL CONCEPT: Stadium sideline at night. Dramatic cyan-tinted floodlights cutting through atmospheric fog. Silhouette of a coaching figure on the sideline (NOT a real person — abstract/silhouette only). Dark, cinematic mood. Think Champions League match-night atmosphere.

TEXT (copy EXACTLY — every accent matters):
- HOOK (large, bold, white, bottom area): "El DT más ganador de Costa Rica ahora te enseña"
- BODY (smaller, white at 55% opacity): "8 campeonatos. 30+ años formando campeones. Jeaustin Campos te revela la metodología mental que usó para ganar."
- CREDENTIAL BADGES (small cyan-bordered pills): "8x Campeón" | "30+ años" | "Keylor · Celso · Jewison"
- CTA (white text on #2076FF blue pill): "Descubrí tu perfil mental → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #2 — Quote: No gané por tener los mejores (QuoteCard)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Quote Card — Large italicized quote centered, attribution below with cyan divider line.
LAYOUT: Near-black background (#0B0C10) with subtle dot grid texture. Giant decorative opening quotation mark in cyan at very low opacity (12%) top-left. Quote text centered vertically. Attribution below quote with a short cyan horizontal line above it. Horizontal white logo centered near bottom at low opacity.

VISUAL CONCEPT: Stadium tunnel entrance atmosphere. Subtle radial cyan glow emanating from center, fading into dark vignette at edges. Moody, atmospheric — like standing in a tunnel looking toward the pitch lights.

TEXT (copy EXACTLY):
- QUOTE (large, white, italic, centered): "No gané 8 campeonatos por tener los mejores jugadores. Los gané porque mis jugadores tenían la mejor mentalidad."
- ATTRIBUTION (smaller, white at 70% opacity): "Jeaustin Campos — 8x Campeón Nacional"
- CREDENTIAL (cyan, small): "8x Campeón Nacional"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #3 — Pilar Sicológico: Práctica vs Partido (PillarHighlight)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Pillar Highlight — Educational pillar card with badge, hook, bullet points, and CTA.
LAYOUT: Near-black background with dot grid. Pillar badge (cyan pill with brain emoji) near top-center. Large bold hook text centered below badge. Body text split into bullet lines with cyan left-border cards. Blue CTA pill button at bottom.

VISUAL CONCEPT: Abstract neural network pattern in cyan (#5BE0FF) on near-black (#0B0C10). Think synaptic connections firing — abstract glowing nodes connected by thin lines. NOT anatomical — purely abstract, elegant, minimal. Subtle dot grid texture underneath.

TEXT (copy EXACTLY):
- PILLAR BADGE (cyan pill): "🧠 Sicológico"
- HOOK (large, bold, white, centered): "¿Por qué tu equipo juega bien en práctica pero falla en partidos?"
- BODY (split into lines, each in a card with cyan left-border):
  Line 1: "La respuesta no está en la táctica."
  Line 2: "Está en la preparación mental."
  Line 3: "Presión. Concentración. Constancia. Motivación."
  Line 4: "El pilar sicológico es lo que separa a un equipo bueno de un equipo campeón."
- CTA (white text on #2076FF blue pill): "Descubrí cómo → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #4 — Stat 87% (StatInsight)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Stat Insight — Massive stat number as hero element, supporting text below.
LAYOUT: Near-black background with dot grid. Small "DATO" badge (cyan text, letter-spacing) at top-center. Giant stat number in cyan with glow effect centered. Hook text below stat in white. Body text below hook at reduced opacity. Credential badges row. Blue CTA pill button. Brand bar at bottom.

VISUAL CONCEPT: Aerial view of a football pitch at night, pitch lines glowing in subtle cyan, atmospheric fog rolling across. The stat "87%" dominates the composition. Dark, moody, data-driven feel.

TEXT (copy EXACTLY):
- DATO BADGE (small, cyan, uppercase, letter-spaced): "DATO"
- STAT (massive 180px, cyan #5BE0FF, bold, glow effect): "87%"
- HOOK (large, white, below stat): "de jugadores sin metodología mental pierden 2–3 años de desarrollo"
- BODY (smaller, white at 55% opacity): "El talento no alcanza. Sin preparación mental estructurada, tus jugadores compiten con media capacidad."
- CREDENTIAL BADGES: "8x Campeón" | "30+ años"
- CTA (white text on #2076FF blue pill): "Cambiá eso → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #5 — ¿Te ponés nervioso? (QuestionHook)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Question Hook — Bold question as hero text, answer tease below, CTA.
LAYOUT: Near-black background with dot grid. Large decorative "?" character in cyan at very low opacity (6%) top-right corner. Question text centered vertically in large bold white. Answer tease below in smaller text at reduced opacity. Blue CTA pill button at bottom. Brand bar.

VISUAL CONCEPT: Stadium tunnel perspective — long dark corridor with a single source of cyan light at the far end. Dramatic depth, like a player about to walk onto the pitch. Atmospheric, moody, tension-filled.

TEXT (copy EXACTLY):
- HOOK (large, bold, white, centered): "¿Te ponés nervioso cuando el partido importa de verdad?"
- BODY (smaller, white at 55% opacity, centered): "No es falta de talento. Es falta de preparación mental. Los campeones no nacen sin nervios — aprenden a usarlos."
- CTA (white text on #2076FF blue pill): "Empezá acá → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #6 — Pilar Táctica: Leer el partido (PillarHighlight)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Pillar Highlight — Left-aligned variant with large translucent emoji in background.
LAYOUT: Near-black background with dot grid. Giant translucent clipboard emoji (📋) at very low opacity (4%) on the right side. Pillar badge top-left. Hook text left-aligned, large, bold. Body split into numbered bullet lines with cyan numbers. CTA text in cyan (not button) at bottom-left. Logo bottom-left at low opacity.

VISUAL CONCEPT: Tactical formation dots connected by thin cyan lines — like a coach's whiteboard but dark and premium. Abstract dots in formation shapes (4-3-3, 4-4-2) with connecting lines. Clean, strategic, intelligent feel.

TEXT (copy EXACTLY):
- PILLAR BADGE (cyan pill): "📋 Táctica"
- HOOK (large, bold, white, left-aligned): "Tu equipo no pierde por táctica. Pierde por no saber LEER el partido."
- BODY (numbered lines):
  01: "Posicionamiento. Lectura del juego. Transiciones."
  02: "La táctica sin inteligencia emocional es un plan que se cae en el minuto 70."
- CTA (cyan text, no button): "Aprendé la metodología → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #7 — Quote: No está en las piernas (QuoteCard)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Quote Card — Card-in-card variant with deep navy card on near-black background.
LAYOUT: Near-black background with very subtle dot grid. Deep navy (#040447) rounded card centered with subtle cyan border and glow. Large decorative opening quotation mark in cyan at low opacity inside the card. Quote text centered inside the card in italic. Attribution below the card with cyan divider lines on each side. Brand bar at bottom.

VISUAL CONCEPT: A football resting on dark grass, lit by a single cyan rim light from behind. Bokeh light spots in the background. Intimate, contemplative mood.

TEXT (copy EXACTLY):
- QUOTE (large, white, italic, centered inside card): "La diferencia entre un jugador bueno y un campeón no está en las piernas. Está en la cabeza."
- ATTRIBUTION (below card, centered, with cyan lines flanking): "Jeaustin Campos — 8x Campeón Nacional"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #8 — Stat 30+ años (StatInsight)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Stat Insight — Left-aligned variant with giant ghost stat in background.
LAYOUT: Near-black background with dot grid. Giant "30+" text at very low opacity (8%) top-right as decorative element. Visible "30+" stat in large cyan with glow, left-aligned. Hook text below in white. Body text below at reduced opacity. CTA text in cyan. Logo bottom-left at low opacity. Brand bar at bottom.

VISUAL CONCEPT: Horizontal light streaks in varying shades of cyan, creating a timeline feel — like light trails from moving vehicles at night but abstract. Lines sweep left to right suggesting progression through time. Dark, sleek, forward-moving.

TEXT (copy EXACTLY):
- STAT (large, cyan #5BE0FF, bold, glow): "30+"
- HOOK (large, white, left-aligned): "años formando campeones: Keylor Navas, Celso Borges, Jewison Bennette"
- BODY (smaller, white at 55% opacity): "La experiencia de un récord no se estudia en libros. Se vive en la cancha. Ahora esa metodología es tuya."
- CTA (cyan text): "Conocé la metodología → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #9 — ¿Tu hijo se frustra? (QuestionHook)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Question Hook — Asymmetric variant with question top-left and answer card bottom-right.
LAYOUT: Near-black background with dot grid. Pillar badge ("Sicológico") top-right. Large bold question text top-left area. Answer tease inside a deep navy (#040447) rounded card at bottom-right with cyan left-border. CTA text in cyan inside the card. Logo bottom-left. Brand bar at bottom.

VISUAL CONCEPT: Youth football boots on a dark field, a single cyan light source creating dramatic shadows. The boots suggest hesitation, not movement — one foot slightly ahead of the other. Intimate, emotional, parent-perspective.

TEXT (copy EXACTLY):
- PILLAR BADGE (cyan pill, top-right): "🧠 Sicológico"
- HOOK (large, bold, white, top-left): "¿Tu hijo tiene talento pero se frustra cuando las cosas no salen?"
- BODY (inside dark card, white at 60% opacity): "No es falta de ganas. Es que nadie le enseñó a manejar la presión. Con la metodología correcta, su talento puede brillar."
- CTA (cyan text inside card): "Apoyalo con ciencia → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #10 — Pilar Físico: Minuto 85 (PillarHighlight)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Pillar Highlight — Split variant with hook on top dark area, body inside deep navy card below.
LAYOUT: Near-black background with very subtle dot grid. Top 48% has pillar badge and large hook text on dark background. Bottom 52% is a deep navy (#040447) rounded card with body text as bullet points (cyan diamond markers), and a blue CTA pill button inside the card. Brand bar at bottom.

VISUAL CONCEPT: Abstract heartbeat/pulse line in cyan — a single horizontal EKG-like line that starts strong on the left and fades/weakens toward the right, suggesting fatigue. The line has a glow effect. Dark, atmospheric background. Think sports science meets premium design.

TEXT (copy EXACTLY):
- PILLAR BADGE (cyan pill): "💪 Físico"
- HOOK (large, bold, white, top area): "Sos rápido. Sos fuerte. Pero en el minuto 85, ¿tu mente aguanta?"
- BODY (inside navy card, bullet points with cyan diamond markers):
  Line 1: "La velocidad y la fuerza sin fortaleza mental son armas que fallan cuando más las necesitás."
  Line 2: "El pilar físico no es solo el cuerpo — es la mente que lo controla."
- CTA (white text on #2076FF blue pill, inside card): "Fortalecé tu mente → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #11 — Talento + Mente (CoachHero)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Coach Hero — Cinematic variant with full background image at reduced opacity, centered text overlay.
LAYOUT: Full background visual at 50% opacity with heavy radial vignette (transparent center, black edges at 75%). Text centered vertically — large bold hook, body text below. Large white logo watermark centered below text at low opacity. Brand bar at bottom.

VISUAL CONCEPT: Empty locker room at night. A single football jersey hanging on a hook, lit by a shaft of cyan light from above. Everything else in deep shadow. Contemplative, aspirational mood. The jersey represents potential — the mind is what activates it.

TEXT (copy EXACTLY):
- HOOK (large, bold, white, centered, text-shadow): "El talento te abre la puerta. La mente es la que te deja entrar."
- BODY (smaller, white at 60% opacity, centered): "Jeaustin Campos — 8 campeonatos, 30+ años formando cracks. Ahora te enseña lo que no te enseñan en la cancha."
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #12 — Los 4 Pilares del Fútbol (PillarHighlight)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Pillar Highlight — Centered variant with badge, hook, four bullet cards with cyan left-border.
LAYOUT: Near-black background with dot grid. Pillar badge at top-center. Large bold hook text centered. Four bullet cards below — each card has a dark navy (#040447) background at 50% opacity, rounded corners, and a cyan left-border (4px). Each card shows one pillar with its sub-elements. Blue CTA pill button at bottom. Brand bar.

VISUAL CONCEPT: Four wireframe icons at very low opacity in the background: a football (Técnica), a chess piece (Táctica), a lightning bolt (Físico), and a brain (Sicológico). Abstract, geometric, minimal. The icons are barely visible — just enough to add visual texture.

TEXT (copy EXACTLY):
- PILLAR BADGE (cyan pill): "⚽ 4 Pilares"
- HOOK (large, bold, white, centered): "Los 4 Pilares del Fútbol"
- BODY (four separate cards, each with cyan left-border):
  Card 1: "Técnica — control, pase, regate, definición"
  Card 2: "Táctica — posicionamiento, lectura, formaciones"
  Card 3: "Físico — velocidad, resistencia, fuerza"
  Card 4: "Sicológico — presión, concentración, constancia"
- CTA (white text on #2076FF blue pill): "¿Cuál es el más débil de tu hijo? → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #13 — Técnica sin mentalidad (QuestionHook)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Question Hook — Minimal gradient variant with only hook text centered, no body text.
LAYOUT: Diagonal gradient background from deep navy (#040447) to near-black (#0B0C10). Subtle dot grid overlay. Large cyan glow halo behind text (radial gradient, very subtle — 8% opacity). Single bold statement centered vertically. "mentefutbol.com" in white at low opacity near bottom. Brand bar at very bottom.

VISUAL CONCEPT: A football dissolving into cyan particles — the ball on the left is solid, and toward the right it breaks apart into glowing cyan dots/particles that scatter and fade. Represents technique without mentality falling apart. Abstract, high-end, dynamic.

TEXT (copy EXACTLY):
- HOOK (large, bold, white, centered, text-shadow with cyan tint): "Técnica sin mentalidad es un truco. Con mentalidad, es un arma."
- URL (white at 40% opacity, centered near bottom): "mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"

NOTE: This piece has NO body text and NO CTA button — just the statement and the URL. Keep it clean and powerful.
```

---

## Piece #14 — Stat 8 campeonatos (StatInsight)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Stat Insight — Glowing circle variant with stat inside a circular border.
LAYOUT: Near-black background with heavier dot grid (4% opacity). Large glowing circle centered (280px diameter, 2px cyan border, cyan box-shadow glow). Massive "8" stat inside the circle in cyan. Hook text below the circle centered. Body text below at reduced opacity. CTA text in cyan at bottom. Brand bar.

VISUAL CONCEPT: Trophy silhouettes — 8 trophy shapes receding in perspective (like a timeline), each backlit by cyan light. The trophies get progressively brighter from left to right, with the 8th being the most prominent. Dark, dramatic, achievement-focused.

TEXT (copy EXACTLY):
- STAT (massive, inside glowing circle, cyan #5BE0FF, bold): "8"
- HOOK (large, white, centered below circle): "campeonatos nacionales — la metodología detrás del récord de Costa Rica"
- BODY (smaller, white at 50% opacity, centered): "Jeaustin Campos no ganó por suerte. Ganó con un sistema mental que ahora podés aprender."
- CTA (cyan text, centered): "Descubrí el sistema → mentefutbol.com"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Piece #15 — Quote: Constancia mental (QuoteCard)

```
Generate a social media static (1080x1350, 4:5) for Mente Futbol.

TEMPLATE TYPE: Quote Card — Side-accent variant with vertical cyan line on left edge.
LAYOUT: Near-black background with very subtle dot grid (2% opacity). Thin vertical cyan line (#5BE0FF at 60% opacity) running down the left side. Profile-pic logo (square icon) top-left at 70% opacity. Quote text left-aligned with surrounding quotes in italic. Attribution below with a short cyan horizontal line and dash. Brand bar at bottom.

VISUAL CONCEPT: One-point perspective corridor — a long symmetric hallway/tunnel with walls converging to a single vanishing point. Cyan light at the far end, creating a dramatic depth effect. The corridor represents the mental journey — consistency leads forward. Dark, architectural, powerful.

TEXT (copy EXACTLY):
- QUOTE (large, white, italic, left-aligned): "La constancia mental gana más partidos que cualquier jugada ensayada."
- ATTRIBUTION (white at 55% opacity, with cyan line): "Jeaustin Campos — 8x Campeón Nacional"
- BRAND BAR (bottom strip): "mentefutbol.com"
```

---

## Quick Reference Table

| # | Preset Label | Template | Variant | Visual Concept |
|---|---|---|---|---|
| 1 | Intro al DT | CoachHero | A | Stadium sideline, cyan floodlights, fog |
| 2 | No gané por tener los mejores | QuoteCard | A | Stadium tunnel, radial cyan glow |
| 3 | Pilar Sicológico | PillarHighlight | A | Abstract neural network in cyan |
| 4 | Stat 87% | StatInsight | A | Aerial pitch, lines glowing cyan |
| 5 | ¿Te ponés nervioso? | QuestionHook | A | Stadium tunnel perspective |
| 6 | Pilar Táctica | PillarHighlight | B | Tactical formation dots + lines |
| 7 | No está en las piernas | QuoteCard | C | Football on dark grass, cyan rim |
| 8 | Stat 30+ años | StatInsight | B | Horizontal cyan light streaks |
| 9 | ¿Tu hijo se frustra? | QuestionHook | B | Youth boots, single cyan light |
| 10 | Pilar Físico — Min 85 | PillarHighlight | C | Heartbeat pulse fading right |
| 11 | Talento + Mente | CoachHero | C | Empty locker room, jersey + cyan light |
| 12 | Los 4 Pilares | PillarHighlight | A | 4 wireframe icons at low opacity |
| 13 | Técnica sin mentalidad | QuestionHook | C | Football dissolving into particles |
| 14 | Stat 8 campeonatos | StatInsight | C | 8 trophy silhouettes, cyan backlight |
| 15 | Constancia mental | QuoteCard | B | One-point perspective corridor |

---

## Workflow

1. Open Gemini (gemini.google.com) → image generation mode
2. Click "Import code" → paste `https://github.com/gmena-max/ad-generator` → Import
3. Paste Master Instructions block
4. Paste individual piece prompt
5. Generate 2-3 variations, pick best
6. Download at highest resolution
7. Verify text against `src/data/presets/mf.ts` — zero tolerance for typos

## Test Batch First

Start with pieces #2, #4, and #5 (QuoteCard, StatInsight, QuestionHook) to validate:
- [ ] Text matches preset EXACTLY (every accent: á, é, í, ó, ú, ñ)
- [ ] Color palette correct (near-black + cyan, no warm colors)
- [ ] Premium/cinematic mood (not cartoonish)
- [ ] Layout follows template structure
- [ ] Resolution/quality sufficient

If text rendering fails → add this to prompts:
```
DO NOT include any text, letters, numbers, words, logos, or watermarks.
Generate ONLY the background visual. Leave clean negative space for text overlay in post-production.
```

## Output File Naming

```
assets/statics/2026-03/ig-feed/mf-01-coach-hero.png
assets/statics/2026-03/ig-feed/mf-02-quote-card.png
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
```
