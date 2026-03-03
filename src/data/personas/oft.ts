import { Persona } from "./types";

export const oftPersonas: Persona[] = [
  {
    id: "paciente-maduro",
    clientId: "oft",
    name: "El Paciente Maduro",
    description: "55+ con visión deteriorada, miedo a cirugía",
    ageRange: "55-65",
    painPoints: [
      "Visión borrosa o nublada",
      "Miedo a la cirugía",
      "No sabe que las cataratas son tratables",
    ],
    hookType: "pain",
    messageAngle: "Reassurance + experience + quick recovery",
    recommendedTemplates: ["photo-hero", "scarcity", "testimonial"],
  },
  {
    id: "profesional-visual",
    clientId: "oft",
    name: "El Profesional Visual",
    description: "35-50, fatiga visual por pantallas, necesita lentes",
    ageRange: "35-50",
    painPoints: [
      "Fatiga visual por pantallas",
      "Dolores de cabeza frecuentes",
      "¿Será que necesito lentes?",
    ],
    hookType: "question",
    messageAngle: "Symptom recognition + prevention + modern solutions",
    recommendedTemplates: ["symptom-question", "educational"],
  },
  {
    id: "padre-preocupado",
    clientId: "oft",
    name: "El Padre Preocupado",
    description: "30-45, hijo con problemas visuales, prevención",
    ageRange: "30-45",
    painPoints: [
      "Hijo entrecierra los ojos",
      "Miopía infantil en aumento",
      "No sabe cuándo llevar al niño al oftalmólogo",
    ],
    hookType: "question",
    messageAngle: "Education + worry trigger + prevention",
    recommendedTemplates: ["educational", "faq-card"],
  },
  {
    id: "paciente-cronico",
    clientId: "oft",
    name: "El Paciente Crónico",
    description: "35-65, ojo seco crónico, ya intentó gotas sin éxito",
    ageRange: "35-65",
    painPoints: [
      "Ojos secos e irritados todo el día",
      "Gotas no funcionan",
      "Afecta su trabajo diario",
    ],
    hookType: "pain",
    messageAngle: "Relief + specialized treatment beyond OTC drops",
    recommendedTemplates: ["symptom-question", "stat-authority"],
  },
];
