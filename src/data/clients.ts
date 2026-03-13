export type BrandRules = {
  mood: string[];
  masterInstructions: string;
  forbidden: string[];
  requiredElements?: string[];
};

export type ClientBrand = {
  id: string;
  name: string;
  colors: {
    primary: string;
    accent: string;
    cta: string;
    background: string;
    text: string;
  };
  logo: string;
  logoWhite: string;
  phone: string;
  headline: string;
  subheadline: string;
  tagline: string;
  reviewCount?: string;
  reviewRating?: string;
  brandRules?: BrandRules;
};

export const clients: Record<string, ClientBrand> = {
  oft: {
    id: "oft",
    name: "Oftalmológica Mena",
    colors: {
      primary: "#0F2B3C",
      accent: "#2E8B8B",
      cta: "#E8714A",
      background: "#FFFFFF",
      text: "#1A1A2E",
    },
    logo: "/clients/oft/logo.png",
    logoWhite: "/clients/oft/logo-white.png",
    phone: "6439-8221",
    headline: "Dr. Diego Mena",
    subheadline: "23+ años de experiencia",
    tagline: "Especialista en Oftalmología",
    reviewCount: "186",
    reviewRating: "4.9",
    brandRules: {
      mood: ["professional", "trustworthy", "clinical", "warm"],
      masterInstructions: `Generate ONLY the background visual. DO NOT include any text, letters, numbers, words, logos, or watermarks.
Dark blue/teal color palette. Professional medical feel.
Style: clean, modern, trustworthy — like a premium ophthalmology clinic.`,
      forbidden: ["text", "logos", "watermarks", "cartoon elements", "bright neon colors"],
    },
  },
  doj: {
    id: "doj",
    name: "Dojo Coding",
    colors: {
      primary: "#1A1A2E",
      accent: "#E94560",
      cta: "#0F3460",
      background: "#FFFFFF",
      text: "#1A1A2E",
    },
    logo: "/clients/doj/logo.png",
    logoWhite: "/clients/doj/logo-white.png",
    phone: "8888-8888",
    headline: "Dojo Coding",
    subheadline: "Academia de programación",
    tagline: "Aprende a programar desde cero",
    brandRules: {
      mood: ["energetic", "tech", "modern", "youthful"],
      masterInstructions: `Generate ONLY the background visual. DO NOT include any text, letters, numbers, words, logos, or watermarks.
Dark navy with hot pink/red accents. Tech/coding academy feel.
Style: modern, digital, energetic — like a gaming or tech brand.`,
      forbidden: ["text", "logos", "watermarks", "corporate stock photo feel"],
    },
  },
  mf: {
    id: "mf",
    name: "Mente Futbol",
    colors: {
      primary: "#0B0C10",
      accent: "#5BE0FF",
      cta: "#2076FF",
      background: "#040447",
      text: "#FFFFFF",
    },
    logo: "/clients/mf/logo.png",
    logoWhite: "/clients/mf/logo-white.png",
    phone: "mentefutbol.com",
    headline: "Jeaustin Campos",
    subheadline: "7x Campeón Nacional",
    tagline: "La psicología del fútbol, por quien lo vivió 7 veces",
    brandRules: {
      mood: ["cinematic", "premium", "moody", "Champions League"],
      masterInstructions: `You have access to the ad-generator codebase for Mente Futbol. Use it as reference for brand colors and visual style.

RULES:
- Generate ONLY the background visual. DO NOT include any text, letters, numbers, words, logos, or watermarks.
- Leave clean negative space where indicated for text overlay in post-production.
- Dark theme ALWAYS (background #0B0C10, near-black)
- Cyan #5BE0FF for accents only — NEVER as background or large fills
- Style: premium, cinematic, moody — like Champions League broadcast graphics
- Subtle dot grid texture in background (tiny dots at very low opacity)
- Keep critical visual interest within the center safe zone`,
      forbidden: ["text", "logos", "watermarks", "warm colors", "bright backgrounds", "cartoon style"],
      requiredElements: ["dot grid texture", "dark background", "cyan accents only"],
    },
  },
};

export const defaultClientId = "oft";
