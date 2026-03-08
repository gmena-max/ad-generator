import { CopyPreset } from "./types";

export const mfPresets: CopyPreset[] = [
  // #1 — CoachHero A — General — Todos
  {
    personaId: "all",
    framework: "direct",
    label: "Intro al DT — Coach Hero",
    copies: [
      {
        hook: "El DT más ganador de Costa Rica ahora te enseña",
        body: "8 campeonatos. 30+ años formando campeones. Jeaustin Campos te revela la metodología mental que usó para ganar.",
        cta: "Descubrí tu perfil mental → mentefutbol.com",
        stat: "8x Campeón",
      },
    ],
  },
  // #2 — QuoteCard A — Sicológico — Todos
  {
    personaId: "all",
    framework: "PAS",
    label: "Quote — No gané por tener los mejores",
    copies: [
      {
        hook: "Jeaustin Campos — 8x Campeón Nacional",
        body: "No gané 8 campeonatos por tener los mejores jugadores. Los gané porque mis jugadores tenían la mejor mentalidad.",
        cta: "mentefutbol.com",
      },
    ],
  },
  // #3 — PillarHighlight A — Sicológico — Entrenador
  {
    personaId: "entrenador",
    framework: "PAS",
    label: "Pilar Sicológico — Práctica vs Partido",
    copies: [
      {
        hook: "¿Por qué tu equipo juega bien en práctica pero falla en partidos?",
        body: "La respuesta no está en la táctica.\nEstá en la preparación mental.\n\nPresión. Concentración. Constancia. Motivación.\n\nEl pilar sicológico es lo que separa a un equipo bueno de un equipo campeón.",
        cta: "Descubrí cómo → mentefutbol.com",
        stat: "Sicológico",
      },
    ],
  },
  // #4 — StatInsight A — General — Entrenador
  {
    personaId: "entrenador",
    framework: "AIDA",
    label: "Stat 87% — Sin metodología",
    copies: [
      {
        hook: "de jugadores sin metodología mental pierden 2–3 años de desarrollo",
        body: "El talento no alcanza. Sin preparación mental estructurada, tus jugadores compiten con media capacidad.",
        cta: "Cambiá eso → mentefutbol.com",
        stat: "87%",
      },
    ],
  },
  // #5 — QuestionHook A — Sicológico — Jugador Adulto
  {
    personaId: "jugador-adulto",
    framework: "PAS",
    label: "¿Te ponés nervioso? — Question Hook",
    copies: [
      {
        hook: "¿Te ponés nervioso cuando el partido importa de verdad?",
        body: "No es falta de talento. Es falta de preparación mental. Los campeones no nacen sin nervios — aprenden a usarlos.",
        cta: "Empezá acá → mentefutbol.com",
      },
    ],
  },
  // #6 — PillarHighlight B — Táctica — Entrenador
  {
    personaId: "entrenador",
    framework: "direct",
    label: "Pilar Táctica — Leer el partido",
    copies: [
      {
        hook: "Tu equipo no pierde por táctica. Pierde por no saber LEER el partido.",
        body: "Posicionamiento. Lectura del juego. Transiciones.\n\nLa táctica sin inteligencia emocional es un plan que se cae en el minuto 70.",
        cta: "Aprendé la metodología → mentefutbol.com",
        stat: "Táctica",
      },
    ],
  },
  // #7 — QuoteCard C — General — Todos
  {
    personaId: "all",
    framework: "direct",
    label: "Quote — No está en las piernas",
    copies: [
      {
        hook: "Jeaustin Campos — 8x Campeón Nacional",
        body: "La diferencia entre un jugador bueno y un campeón no está en las piernas. Está en la cabeza.",
        cta: "mentefutbol.com",
      },
    ],
  },
  // #8 — StatInsight B — General — Todos
  {
    personaId: "all",
    framework: "AIDA",
    label: "Stat 30+ años — Trayectoria",
    copies: [
      {
        hook: "años formando campeones: Keylor Navas, Celso Borges, Jewison Bennette",
        body: "La experiencia de un récord no se estudia en libros. Se vive en la cancha. Ahora esa metodología es tuya.",
        cta: "Conocé la metodología → mentefutbol.com",
        stat: "30+",
      },
    ],
  },
  // #9 — QuestionHook B — Sicológico — Padre
  {
    personaId: "padre",
    framework: "PAS",
    label: "¿Tu hijo se frustra? — Padre",
    copies: [
      {
        hook: "¿Tu hijo tiene talento pero se frustra cuando las cosas no salen?",
        body: "No es falta de ganas. Es que nadie le enseñó a manejar la presión. Con la metodología correcta, su talento puede brillar.",
        cta: "Apoyalo con ciencia → mentefutbol.com",
        stat: "Sicológico",
      },
    ],
  },
  // #10 — PillarHighlight C — Físico — Jugador Adulto
  {
    personaId: "jugador-adulto",
    framework: "PAS",
    label: "Pilar Físico — Minuto 85",
    copies: [
      {
        hook: "Sos rápido. Sos fuerte. Pero en el minuto 85, ¿tu mente aguanta?",
        body: "La velocidad y la fuerza sin fortaleza mental son armas que fallan cuando más las necesitás.\n\nEl pilar físico no es solo el cuerpo — es la mente que lo controla.",
        cta: "Fortalecé tu mente → mentefutbol.com",
        stat: "Físico",
      },
    ],
  },
  // #11 — CoachHero C — General — Jugador Joven
  {
    personaId: "jugador-joven",
    framework: "direct",
    label: "Talento + Mente — Coach Hero",
    copies: [
      {
        hook: "El talento te abre la puerta. La mente es la que te deja entrar.",
        body: "Jeaustin Campos — 8 campeonatos, 30+ años formando cracks. Ahora te enseña lo que no te enseñan en la cancha.",
        cta: "Empezá gratis → mentefutbol.com",
        stat: "8x Campeón",
      },
    ],
  },
  // #12 — PillarHighlight A — General — Padre
  {
    personaId: "padre",
    framework: "AIDA",
    label: "Los 4 Pilares del Fútbol",
    copies: [
      {
        hook: "Los 4 Pilares del Fútbol",
        body: "Técnica — control, pase, regate, definición\nTáctica — posicionamiento, lectura, formaciones\nFísico — velocidad, resistencia, fuerza\nSicológico — presión, concentración, constancia",
        cta: "¿Cuál es el más débil de tu hijo? → mentefutbol.com",
        stat: "4 Pilares",
      },
    ],
  },
  // #13 — QuestionHook C — Técnica — Todos
  {
    personaId: "all",
    framework: "direct",
    label: "Técnica sin mentalidad — Question Hook",
    copies: [
      {
        hook: "Técnica sin mentalidad es un truco. Con mentalidad, es un arma.",
        body: "",
        cta: "mentefutbol.com",
        stat: "Técnica",
      },
    ],
  },
  // #14 — StatInsight C — General — Todos
  {
    personaId: "all",
    framework: "AIDA",
    label: "Stat 8 campeonatos — Récord",
    copies: [
      {
        hook: "campeonatos nacionales — la metodología detrás del récord de Costa Rica",
        body: "Jeaustin Campos no ganó por suerte. Ganó con un sistema mental que ahora podés aprender.",
        cta: "Descubrí el sistema → mentefutbol.com",
        stat: "8",
      },
    ],
  },
  // #15 — QuoteCard B — Sicológico — Jugador Joven
  {
    personaId: "jugador-joven",
    framework: "direct",
    label: "Quote — Constancia mental",
    copies: [
      {
        hook: "Jeaustin Campos — 8x Campeón Nacional",
        body: "La constancia mental gana más partidos que cualquier jugada ensayada.",
        cta: "mentefutbol.com",
      },
    ],
  },
];
