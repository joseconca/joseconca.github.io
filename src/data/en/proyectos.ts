export const proyectos = [
  {
    id: "trabajoCiclo-fastAPI-find-my-pet",
    categoria: "Web application",
    tipo: "aplicacion" as const,
    demoTipo: "video" as const,
    titulo: "Find My Pet",
    tecnologias: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Google Maps API"],
    descripcion:
      "Web application for reporting lost pets and sightings. The backend uses FastAPI and SQLAlchemy, with SQLite for persistence. Users can manage accounts and pets, sign in, and report or browse geolocated sightings displayed on Google Maps.",
    url: "https://github.com/joseconca/proyecto-final-DAW",
    urlDirecto: "https://github.com/user-attachments/assets/34a21b34-e5cd-4cc4-8b3a-bdea9dda0d0d",
  },
  {
    id: "TFG-historical-events-nextjs",
    categoria: "Educational game",
    tipo: "juego" as const,
    estado: "Private source code (degree project in progress)",
    titulo: "Timeline: A History of Computing",
    tecnologias: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "dnd-kit"],
    descripcion:
      "Educational web game where players arrange computing history events chronologically using drag and drop. Events and games are stored in PostgreSQL via Prisma; the game validates placements and calculates scores based on accuracy, mistakes and time. Includes a protected administration area for managing events.",
  },
  {
    id: "gremio-expediciones-nextjs",
    categoria: "Browser RPG",
    tipo: "juego" as const,
    titulo: "Expedition Guild",
    tecnologias: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Zustand", "Leaflet"],
    descripcion:
      "Web RPG in development focused on base management and expeditions. Features character classes, upgradable buildings, equipment and inventory, abilities, procedurally varied missions, geographic-map travel, turn-based combat, rewards, trading and siege systems. PostgreSQL and Prisma provide persistence, with automated tests for selected gameplay and API logic.",
    url: "https://github.com/joseconca/gremio-expediciones",
  },
  {
    id: "HTML-canvas-pokemon-spaceinvaders",
    categoria: "Arcade game",
    tipo: "juego" as const,
    titulo: "Run, Pikachu, Run!",
    tecnologias: ["HTML5 Canvas", "CSS", "JavaScript (ES modules)"],
    descripcion:
      "Space Invaders-inspired arcade game featuring Pokémon characters. Choose a character, move and shoot through enemy waves, face bosses and earn points. Supports touch controls as well as keyboard input.",
    url: "https://github.com/joseconca/juego-pokemon-javascript",
    urlDirecto: "https://joseconca.github.io/juego-pokemon-javascript/",
  },
  {
    id: "joseconca-github-pages",
    categoria: "Portfolio",
    tipo: "aplicacion" as const,
    titulo: "This professional portfolio",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    descripcion:
      "Professional portfolio built with Next.js, with content in separate data modules. Exported as a static website and automatically deployed to GitHub Pages through GitHub Actions.",
    url: "https://github.com/joseconca/joseconca.github.io",
    urlDirecto: "https://joseconca.github.io/en/",
  },
  {
    id: "Otros-proyectos",
    categoria: "More repositories",
    titulo: "Other projects",
    descripcion:
      "More programming projects and exercises are available on my public GitHub profile.",
    url: "https://github.com/joseconca?tab=repositories",
  },
];
