import { CopyPreset } from "./types";

export const oftPresets: CopyPreset[] = [
  // ─── El Paciente Maduro (55-65) ────────────────────────────
  {
    personaId: "paciente-maduro",
    framework: "PAS",
    label: "Cataratas — Miedo",
    copies: [
      {
        hook: "¿Ve borroso o nublado?",
        body: "Las cataratas avanzan sin dolor. Cada día que pasa, su visión se deteriora más. La cirugía es rápida, segura y con recuperación en días.",
        cta: "Agenda su valoración",
        stat: "23+",
      },
      {
        hook: "Las cataratas no duelen. Por eso son tan peligrosas.",
        body: "Son la primera causa de ceguera reversible. Pero si espera demasiado, la cirugía se complica. Más de 23 años de experiencia respaldan al Dr. Mena.",
        cta: "Escríbanos por WhatsApp",
      },
    ],
  },
  {
    personaId: "paciente-maduro",
    framework: "AIDA",
    label: "Cataratas — Recuperación",
    copies: [
      {
        hook: "Recupere su visión en menos de una semana",
        body: "La cirugía de catarata dura solo 15 minutos. Miles de pacientes ya recuperaron su visión con el Dr. Diego Mena en Alajuela Centro.",
        cta: "Agenda su cita hoy",
        stat: "15min",
      },
      {
        hook: "Miles de pacientes ya ven claro otra vez",
        body: "Tecnología de última generación. Sin dolor. Recuperación rápida. 23+ años cuidando la salud visual de los costarricenses.",
        cta: "Escríbanos hoy",
        stat: "4.9★",
      },
    ],
  },

  // ─── El Profesional Visual (35-50) ─────────────────────────
  {
    personaId: "profesional-visual",
    framework: "PAS",
    label: "Fatiga Visual",
    copies: [
      {
        hook: "¿Le duele la cabeza después de usar la computadora?",
        body: "La fatiga visual no es normal. Pasar horas frente a pantallas sin protección puede dañar su visión permanentemente. Una valoración a tiempo lo previene.",
        cta: "Agenda su valoración",
      },
      {
        hook: "¿Ve borroso al final del día?",
        body: "Sus ojos le están diciendo algo. La vista cansada no se resuelve con gotas. Necesita un diagnóstico profesional.",
        cta: "WhatsApp 6439-8221",
      },
    ],
  },
  {
    personaId: "profesional-visual",
    framework: "AIDA",
    label: "Prevención Visual",
    copies: [
      {
        hook: "Su visión merece la misma atención que su salud",
        body: "Un examen oftalmológico completo detecta problemas antes de que avancen. El Dr. Mena le da un diagnóstico claro y opciones personalizadas.",
        cta: "Agenda su cita",
      },
      {
        hook: "¿Cuándo fue su último examen de vista?",
        body: "Si no recuerda, ya es hora. Un chequeo preventivo puede evitar problemas mayores. Especialista con 23+ años de experiencia.",
        cta: "Consulte hoy",
      },
    ],
  },

  // ─── El Padre Preocupado (30-45) ───────────────────────────
  {
    personaId: "padre-preocupado",
    framework: "PAS",
    label: "Miopía Infantil",
    copies: [
      {
        hook: "¿Su hijo entrecierra los ojos para ver la pizarra?",
        body: "La miopía en niños está aumentando. Sin atención, puede avanzar rápidamente. Una detección temprana hace toda la diferencia.",
        cta: "Agenda su valoración",
      },
      {
        hook: "La miopía infantil se puede controlar",
        body: "Pero solo si se detecta a tiempo. Los niños no siempre dicen que ven mal. Traiga a su hijo para una revisión completa.",
        cta: "WhatsApp 6439-8221",
      },
    ],
  },
  {
    personaId: "padre-preocupado",
    framework: "AIDA",
    label: "Revisión Niños",
    copies: [
      {
        hook: "¿Sabía que 1 de cada 4 niños tiene un problema visual no detectado?",
        body: "Una revisión oftalmológica puede detectar miopía, astigmatismo y otros problemas antes de que afecten su rendimiento escolar.",
        cta: "Agenda la cita de su hijo",
        stat: "1/4",
      },
      {
        hook: "Proteja la visión de sus hijos",
        body: "Las pantallas, la genética y la falta de luz natural aumentan la miopía infantil. Un examen completo con el Dr. Mena les da un diagnóstico claro.",
        cta: "Consulte con un especialista",
      },
    ],
  },

  // ─── El Paciente Crónico (35-65) ───────────────────────────
  {
    personaId: "paciente-cronico",
    framework: "PAS",
    label: "Ojo Seco — Frustración",
    copies: [
      {
        hook: "¿Siente los ojos secos, irritados o cansados?",
        body: "Las gotas de farmacia solo alivian temporalmente. El ojo seco crónico necesita un tratamiento especializado que ataque la causa, no solo los síntomas.",
        cta: "Agenda su valoración",
      },
      {
        hook: "¿Ya probó de todo para el ojo seco y nada funciona?",
        body: "Es porque las gotas comerciales no tratan la causa. Un diagnóstico especializado identifica qué tipo de ojo seco tiene y cómo tratarlo de verdad.",
        cta: "WhatsApp 6439-8221",
      },
    ],
  },
  {
    personaId: "paciente-cronico",
    framework: "AIDA",
    label: "Ojo Seco — Tratamiento",
    copies: [
      {
        hook: "El ojo seco tiene solución",
        body: "Tratamientos especializados que van más allá de las gotas. El Dr. Diego Mena evalúa su caso y diseña un plan personalizado.",
        cta: "Consulte con un especialista",
      },
      {
        hook: "No tiene que vivir con ardor y ojos irritados",
        body: "El ojo seco crónico es tratable con el diagnóstico correcto. 23+ años de experiencia en oftalmología avanzada.",
        cta: "Agenda su cita hoy",
        stat: "23+",
      },
    ],
  },

  // ─── General (all personas) ────────────────────────────────
  {
    personaId: "all",
    framework: "direct",
    label: "General — Social Proof",
    copies: [
      {
        hook: "186 reseñas en Google. 4.9 estrellas.",
        body: "Miles de pacientes confían en el Dr. Diego Mena para su salud visual.",
        cta: "Escríbanos hoy",
        stat: "4.9★",
      },
      {
        hook: "¿Problemas de visión? No espere más.",
        body: "Más de 23 años cuidando la salud visual de los costarricenses. Alajuela Centro.",
        cta: "Agenda tu cita",
      },
    ],
  },
];
