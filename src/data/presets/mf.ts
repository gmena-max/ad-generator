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
        body: "7 campeonatos. 30+ años formando campeones. Jeaustin Campos te revela la metodología mental que usó para ganar.",
        cta: "Descubrí tu perfil mental",
        stat: "7x Campeón",
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
        hook: "¿Cuando caminás hacia la cancha... ya ganaste o ya perdiste?",
        body: "No gané 7 campeonatos por tener los mejores jugadores. Los gané porque mis jugadores tenían la mejor mentalidad.",
        cta: "Aprendé del campeón",
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
        body: "Presión, concentración, constancia, motivación — los 4 ejes del pilar sicológico.\nLa táctica te pone en el campo. La mente decide si competís o te congelás.\nEl equipo que domina su sicología no depende de la suerte.",
        cta: "Descubrí cómo",
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
        cta: "Cambiá eso",
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
        cta: "Empezá acá",
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
        cta: "Aprendé la metodología",
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
        hook: "Jeaustin Campos — 7x Campeón Nacional",
        body: "La diferencia entre un jugador bueno y un campeón no está en las piernas. Está en la cabeza.",
        cta: "Descubrí la diferencia",
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
        cta: "Conocé la metodología",
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
        cta: "Apoyalo con ciencia",
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
        cta: "Fortalecé tu mente",
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
        body: "Jeaustin Campos — 7 campeonatos, 30+ años formando cracks. Ahora te enseña lo que no te enseñan en la cancha.",
        cta: "Empezá gratis",
        stat: "7x Campeón",
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
        cta: "¿Cuál es el más débil de tu hijo?",
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
        cta: "Hacé el quiz mental",
        stat: "Técnica",
      },
    ],
  },
  // #14 — StatInsight C — General — Todos
  {
    personaId: "all",
    framework: "AIDA",
    label: "Stat 7 campeonatos — Récord",
    copies: [
      {
        hook: "campeonatos nacionales — la metodología detrás del récord de Costa Rica",
        body: "Jeaustin Campos no ganó por suerte. Ganó con un sistema mental que ahora podés aprender.",
        cta: "Descubrí el sistema",
        stat: "7",
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
        hook: "Jeaustin Campos — 7x Campeón Nacional",
        body: "La constancia mental gana más partidos que cualquier jugada ensayada.",
        cta: "Empezá hoy",
      },
    ],
  },
  // #16 — StatInsight — 3er lugar Mundial de Clubes FIFA
  {
    personaId: "all",
    framework: "AIDA",
    label: "Stat 3er lugar — Mundial de Clubes",
    copies: [
      {
        hook: "lugar en el Mundial de Clubes FIFA 2005 — Saprissa vs. los gigantes del mundo",
        body: "Jeaustin Campos llevó a un equipo centroamericano al podio mundial. La preparación mental fue la diferencia.",
        cta: "Aprendé del DT que compitió contra el mundo",
        stat: "3er",
      },
    ],
  },
  // #17 — StatInsight — Selecciones dirigidas
  {
    personaId: "entrenador",
    framework: "AIDA",
    label: "Stat 3 selecciones — Internacional",
    copies: [
      {
        hook: "selecciones nacionales dirigidas — Costa Rica, Puerto Rico, Honduras",
        body: "No cualquier DT cruza fronteras. La metodología mental de Jeaustin Campos trasciende culturas y ligas.",
        cta: "Accedé a esa metodología",
        stat: "3",
      },
    ],
  },
  // #18 — StatInsight — Jugadores formados
  {
    personaId: "jugador-joven",
    framework: "AIDA",
    label: "Stat 200+ jugadores formados",
    copies: [
      {
        hook: "jugadores formados — de ligas menores a selecciones nacionales y clubes europeos",
        body: "Keylor Navas. Celso Borges. Jewison Bennette. Todos pasaron por las manos de un DT que prioriza la mente.",
        cta: "Tu turno",
        stat: "200+",
      },
    ],
  },
  // #19 — StatInsight — Finales jugadas
  {
    personaId: "all",
    framework: "AIDA",
    label: "Stat 12 finales — Presión máxima",
    copies: [
      {
        hook: "finales nacionales dirigidas — más que cualquier otro DT activo en Centroamérica",
        body: "La final es donde todo se define. Jeaustin Campos sabe exactamente qué pasa en la cabeza de un jugador cuando todo está en juego.",
        cta: "Preparate para tu final",
        stat: "12",
      },
    ],
  },
  // #20 — StatInsight — Porcentaje mentalidad
  {
    personaId: "jugador-adulto",
    framework: "PAS",
    label: "Stat 70% — El fútbol es mental",
    copies: [
      {
        hook: "del rendimiento en partidos decisivos depende de la fortaleza mental",
        body: "Técnica la tenés. Físico lo trabajás. Pero sin mente, todo se cae cuando más importa.",
        cta: "Entrenala",
        stat: "70%",
      },
    ],
  },
];
