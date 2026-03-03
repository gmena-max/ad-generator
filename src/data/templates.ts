export type TemplateId = "stat-authority" | "symptom-question" | "social-proof" | "faq-card" | "educational" | "scarcity" | "photo-hero" | "testimonial";

export type CopyContent = {
  hook: string;
  body: string;
  cta: string;
  stat?: string;
  question?: string;
  answer?: string;
};

export type AdTemplate = {
  id: TemplateId;
  name: string;
  description: string;
  fields: (keyof CopyContent)[];
  defaultCopy: CopyContent;
  campaignStage: "cold" | "warm" | "hot";
};

export const templates: AdTemplate[] = [
  {
    id: "photo-hero",
    name: "Photo Hero",
    description: "Full-bleed photo + gradient overlay + hook text — highest engagement",
    fields: ["hook", "body", "cta"],
    campaignStage: "cold",
    defaultCopy: {
      hook: "Recupere su visión",
      body: "Cirugía de catarata segura y efectiva. Más de 23 años de experiencia.",
      cta: "Agenda su valoración",
    },
  },
  {
    id: "stat-authority",
    name: "Stat Authority",
    description: "Large stat number + photo + brand bar with CTA",
    fields: ["stat", "hook", "body", "cta"],
    campaignStage: "cold",
    defaultCopy: {
      stat: "23+",
      hook: "Años cuidando su visión",
      body: "Tecnología de última generación en Alajuela Centro.",
      cta: "Agenda su valoración",
    },
  },
  {
    id: "symptom-question",
    name: "Symptom Question",
    description: "Bold question hook + symptom bullets + CTA button",
    fields: ["hook", "body", "cta"],
    campaignStage: "cold",
    defaultCopy: {
      hook: "¿Ve borroso o nublado?",
      body: "Podría ser cataratas. La cirugía es rápida, segura y efectiva.",
      cta: "Agenda su valoración",
    },
  },
  {
    id: "social-proof",
    name: "Social Proof",
    description: "Star rating + review count + trust badges + CTA",
    fields: ["stat", "hook", "body", "cta"],
    campaignStage: "warm",
    defaultCopy: {
      stat: "4.9★",
      hook: "186 reseñas en Google",
      body: "Miles de pacientes confían en el Dr. Diego Mena.",
      cta: "Escríbanos hoy",
    },
  },
  {
    id: "testimonial",
    name: "Testimonial",
    description: "Patient quote + star rating + review badge — social proof",
    fields: ["body", "hook", "cta"],
    campaignStage: "warm",
    defaultCopy: {
      hook: "María R.",
      body: "Tenía mucho miedo de la cirugía, pero el Dr. Mena me explicó todo con mucha paciencia. Hoy veo mejor que nunca.",
      cta: "Escríbanos por WhatsApp",
    },
  },
  {
    id: "faq-card",
    name: "FAQ Card",
    description: "Single Q&A card — question bold, answer below, doctor badge",
    fields: ["question", "answer", "cta"],
    campaignStage: "warm",
    defaultCopy: {
      question: "¿Duele la cirugía de catarata?",
      answer: "No. Se realiza con anestesia local en gotas. El procedimiento dura aproximadamente 15 minutos y la recuperación es rápida.",
      hook: "",
      body: "",
      cta: "¿Más preguntas? Escríbanos",
    },
  },
  {
    id: "educational",
    name: "Educational",
    description: "Topic title + explanation + CTA — informative style",
    fields: ["hook", "body", "cta"],
    campaignStage: "cold",
    defaultCopy: {
      hook: "Ojo Seco: Causas y Tratamiento",
      body: "El síndrome de ojo seco afecta a millones de personas. Ardor, enrojecimiento y visión borrosa son señales de alerta.",
      cta: "Consulte con un especialista",
    },
  },
  {
    id: "scarcity",
    name: "Scarcity",
    description: '"Espacios limitados" badge + photo + WhatsApp CTA',
    fields: ["hook", "body", "cta"],
    campaignStage: "hot",
    defaultCopy: {
      hook: "Espacios Limitados",
      body: "Valoración oftalmológica completa con el Dr. Diego Mena. Alajuela Centro.",
      cta: "WhatsApp 6439-8221",
    },
  },
];
