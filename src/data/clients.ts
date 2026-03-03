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
  doctor: string;
  credential: string;
  tagline: string;
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
    doctor: "Dr. Diego Mena",
    credential: "23+ años de experiencia",
    tagline: "Especialista en Oftalmología",
  },
};

export const defaultClientId = "oft";
