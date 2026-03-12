import { AiPrompt } from "./types";

export const mfPrompts: AiPrompt[] = [
  {
    id: "mf-02",
    clientId: "mf",
    templateId: "mf-quote-card",
    variant: "a",
    label: "Stadium tunnel, radial cyan glow",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Quote card — text will be centered vertically on the image. Leave the center area clean for text overlay. Atmospheric texture at edges.

VISUAL CONCEPT: Stadium tunnel entrance atmosphere. Subtle radial cyan glow emanating from center, fading into dark vignette at edges. Moody, atmospheric — like standing in a tunnel looking toward the pitch lights.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-03",
    clientId: "mf",
    templateId: "mf-pillar-highlight",
    variant: "a",
    label: "Empty locker room, pre-game tension",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Educational card — content will be centered vertically with bullet points. Keep background moody and dark so white text remains legible over the entire image. Avoid bright areas in the center.

VISUAL CONCEPT: Empty football locker room, pre-game atmosphere. Dark, moody, cinematic lighting — a single warm overhead light casting dramatic shadows. Team jerseys hanging on hooks along the wall, an empty bench in the foreground. The tension of the moment BEFORE the match. Color palette: near-black (#0B0C10) dominant, subtle cyan (#5BE0FF) accent from a secondary light source or reflection on metal lockers. NO people, NO text, NO logos on jerseys. Think Champions League broadcast cinematography — premium, atmospheric, quiet tension.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-04",
    clientId: "mf",
    templateId: "mf-stat-insight",
    variant: "a",
    label: "Aerial pitch, lines glowing cyan",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Stat card — a large stat number will be placed upper-center, with supporting text below. Leave the upper-center area relatively clean for the stat overlay. Atmospheric texture around edges.

VISUAL CONCEPT: Aerial view of a football pitch at night, pitch lines glowing in subtle cyan, atmospheric fog rolling across. Dark, moody, data-driven feel.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-05",
    clientId: "mf",
    templateId: "mf-question-hook",
    variant: "a",
    label: "Stadium tunnel perspective",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Question card — text will be centered vertically. Leave center clean for text overlay. Atmospheric texture at edges.

VISUAL CONCEPT: Stadium tunnel perspective — long dark corridor with a single source of cyan light at the far end. Dramatic depth, like a player about to walk onto the pitch. Atmospheric, moody, tension-filled.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-06",
    clientId: "mf",
    templateId: "mf-pillar-highlight",
    variant: "b",
    label: "Tactical formation dots + lines",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned card — content will sit on the left side. Keep the left half relatively clean for text. Visual texture can be heavier on the right side.

VISUAL CONCEPT: Tactical formation dots connected by thin cyan lines — like a coach's whiteboard but dark and premium. Abstract dots in formation shapes (4-3-3, 4-4-2) with connecting lines. Clean, strategic, intelligent feel.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-07",
    clientId: "mf",
    templateId: "mf-quote-card",
    variant: "c",
    label: "Football on dark grass, cyan rim",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Card-in-card quote — a centered card will overlay the image. Keep the center clean for the card. Atmospheric texture at edges and corners.

VISUAL CONCEPT: A football resting on dark grass, lit by a single cyan rim light from behind. Bokeh light spots in the background. Intimate, contemplative mood.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-08",
    clientId: "mf",
    templateId: "mf-stat-insight",
    variant: "b",
    label: "Horizontal cyan light streaks",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned stat — content will sit on the left side. Visual texture can be heavier on the right. Leave the left half clean for stat and text overlay.

VISUAL CONCEPT: Horizontal light streaks in varying shades of cyan, creating a timeline feel — like light trails from moving vehicles at night but abstract. Lines sweep left to right suggesting progression through time. Dark, sleek, forward-moving.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-09",
    clientId: "mf",
    templateId: "mf-question-hook",
    variant: "b",
    label: "Youth boots, single cyan light",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Asymmetric layout — question text will go top-left, answer card bottom-right. Leave top-left area clean for large text. A dark card will overlay the bottom-right.

VISUAL CONCEPT: Youth football boots on a dark field, a single cyan light source creating dramatic shadows. The boots suggest hesitation, not movement — one foot slightly ahead of the other. Intimate, emotional, parent-perspective.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-10",
    clientId: "mf",
    templateId: "mf-pillar-highlight",
    variant: "c",
    label: "Heartbeat pulse fading right",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Split layout — top 48% will have a pillar badge and hook text on the atmospheric background. Bottom 52% will be covered by a dark card overlay. Focus visual interest in the top half.

VISUAL CONCEPT: Abstract heartbeat/pulse line in cyan — a single horizontal EKG-like line that starts strong on the left and fades/weakens toward the right, suggesting fatigue. The line has a glow effect. Dark, atmospheric background. Sports science meets premium design.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-12",
    clientId: "mf",
    templateId: "mf-pillar-highlight",
    variant: "a",
    label: "4 wireframe icons at low opacity",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Educational card — content will be centered vertically with four bullet cards. Keep background texture very subtle so text and cards remain legible.

VISUAL CONCEPT: Four wireframe icons at very low opacity in the background: a football (Técnica), a chess piece (Táctica), a lightning bolt (Físico), and a brain (Sicológico). Abstract, geometric, minimal. The icons are barely visible — just enough to add visual texture.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-13",
    clientId: "mf",
    templateId: "mf-question-hook",
    variant: "c",
    label: "Football dissolving into particles",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Minimal gradient — text will be centered vertically. Diagonal gradient background with subtle texture. Keep the center clean for a single bold statement overlay.

VISUAL CONCEPT: A football dissolving into cyan particles — the ball on the left is solid, and toward the right it breaks apart into glowing cyan dots/particles that scatter and fade. Represents technique without mentality falling apart. Abstract, high-end, dynamic.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-15",
    clientId: "mf",
    templateId: "mf-quote-card",
    variant: "b",
    label: "One-point perspective corridor",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Side-accent quote — content will be left-aligned with a vertical cyan accent line on the left edge. Leave the left-center area clean for text overlay. Visual depth on the right side.

VISUAL CONCEPT: One-point perspective corridor — a long symmetric hallway/tunnel with walls converging to a single vanishing point. Cyan light at the far end, creating a dramatic depth effect. The corridor represents the mental journey — consistency leads forward. Dark, architectural, powerful.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-17",
    clientId: "mf",
    templateId: "mf-stat-insight",
    variant: "b",
    label: "Abstracted flag ribbons, cyan tint",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned stat — content will sit on the left side. Visual texture can be heavier on the right. Leave the left half clean for stat and text overlay.

VISUAL CONCEPT: Three national flags (Costa Rica, Puerto Rico, Honduras) abstracted into flowing fabric ribbons with cyan tint, intertwining against a near-black background. The flags are ghostly, almost translucent — more texture than literal. Suggests international reach without being overly literal.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-18",
    clientId: "mf",
    templateId: "mf-stat-insight",
    variant: "c",
    label: "Constellation of glowing dots",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Glowing circle stat — a large glowing circle with a stat number will be centered. Leave clean space around the center circle. Text will appear below the circle.

VISUAL CONCEPT: A constellation of 200+ small glowing cyan dots scattered across the dark background, each representing a player formed. Some dots are brighter (the stars), connected by faint cyan lines. Feels like a galaxy of talent. Expansive, legacy-focused.`,
    aspectRatio: "4:5",
  },
  {
    id: "mf-20",
    clientId: "mf",
    templateId: "mf-stat-insight",
    variant: "b",
    label: "Brain + football wireframe",
    prompt: `Generate a background image (1080x1350, 4:5) for Mente Futbol.

COMPOSITION: Left-aligned stat — content will sit on the left side. Visual texture can be heavier on the right. Leave the left half clean for stat and text overlay.

VISUAL CONCEPT: Split composition — left side shows a brain outline in cyan wireframe, right side shows a football in matching wireframe. They're connected by a pulsing cyan line at the center. The brain is larger/brighter, visually dominant. Represents that the mental side outweighs the physical. Dark, scientific, premium.`,
    aspectRatio: "4:5",
  },
];
