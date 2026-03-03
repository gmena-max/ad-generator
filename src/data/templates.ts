export type TemplateId = "stat-authority" | "symptom-question" | "social-proof" | "faq-card" | "educational" | "scarcity";

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
};

export const templates: AdTemplate[] = [
  {
    id: "stat-authority",
    name: "Stat Authority",
    description: "Large stat number + doctor photo + brand bar with CTA",
    fields: ["stat", "hook", "body", "cta"],
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
    defaultCopy: {
      stat: "4.9★",
      hook: "186 reseñas en Google",
      body: "Miles de pacientes confían en el Dr. Diego Mena.",
      cta: "Escríbanos hoy",
    },
  },
  {
    id: "faq-card",
    name: "FAQ Card",
    description: "Single Q&A card — question bold, answer below, doctor badge",
    fields: ["question", "answer", "cta"],
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
    defaultCopy: {
      hook: "Ojo Seco: Causas y Tratamiento",
      body: "El síndrome de ojo seco afecta a millones de personas. Ardor, enrojecimiento y visión borrosa son señales de alerta.",
      cta: "Consulte con un especialista",
    },
  },
  {
    id: "scarcity",
    name: "Scarcity",
    description: '"Espacios limitados" badge + doctor photo + WhatsApp CTA',
    fields: ["hook", "body", "cta"],
    defaultCopy: {
      hook: "Espacios Limitados",
      body: "Valoración oftalmológica completa con el Dr. Diego Mena. Alajuela Centro.",
      cta: "WhatsApp 6439-8221",
    },
  },
];

export type CopyPreset = {
  label: string;
  category: string;
  copies: CopyContent[];
};

export const copyPresets: CopyPreset[] = [
  {
    label: "Cataratas",
    category: "cataratas",
    copies: [
      {
        hook: "¿Ve borroso o nublado?",
        body: "Podría ser cataratas. La cirugía es rápida, segura y efectiva. Más de 23 años de experiencia.",
        cta: "Agenda su valoración",
      },
      {
        hook: "Las cataratas son la primera causa de ceguera reversible.",
        body: "El Dr. Mena puede ayudarle a recuperar su visión.",
        cta: "Escríbanos por WhatsApp",
      },
      {
        hook: "99% de los pacientes recuperan su visión",
        body: "Tras la cirugía de catarata. Tecnología de última generación en Alajuela Centro.",
        cta: "Agende hoy",
        stat: "99%",
      },
    ],
  },
  {
    label: "Ojo Seco",
    category: "ojo-seco",
    copies: [
      {
        hook: "¿Siente los ojos secos, irritados o cansados?",
        body: "El ojo seco es tratable. Consulte con un especialista.",
        cta: "WhatsApp 6439-8221",
      },
    ],
  },
  {
    label: "General",
    category: "general",
    copies: [
      {
        hook: "¿Problemas de visión? No espere más.",
        body: "Más de 23 años cuidando la salud visual de los costarricenses.",
        cta: "Agenda tu cita",
      },
      {
        hook: "186 reseñas en Google. 4.9 estrellas.",
        body: "Miles de pacientes confían en el Dr. Diego Mena.",
        cta: "Escríbanos hoy",
        stat: "4.9★",
      },
    ],
  },
];
