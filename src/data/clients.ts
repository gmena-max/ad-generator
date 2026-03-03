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
  },
};

export const defaultClientId = "oft";
