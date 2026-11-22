export const proyectos = [
  {
    id: "blade-meridian-android",
    titulo: "Blade Meridian",
    categoria: "RPG para Android",
    tipo: "juego" as const,
    estado: "En desarrollo",
    tecnologias: ["Java", "Android", "Spring Boot", "PostgreSQL", "MapLibre", "APIs REST"],
    descripcion:
      "RPG geolocalizado para Android con exploración sobre un mapa, combates por turnos, clases definidas por el equipamiento y juego individual o cooperativo. Cuenta con cliente Android, lógica de juego independiente y servidor Spring Boot con PostgreSQL.",
    imagen: "/projects/blade-meridian-banner.png",
    imagenLogo: "/projects/blade-meridian-icon.png",
    imagenAlt: "Paisaje del videojuego Blade Meridian",
    urlSitio: "https://joseconca.github.io/blade-meridian/",
  },
  {
    id: "trabajoCiclo-fastAPI-find-my-pet",
    categoria: "Aplicación web",
    tipo: "aplicacion" as const,
    demoTipo: "video" as const,
    titulo: "Find My Pet",
    tecnologias: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Google Maps API"],
    descripcion:
      "Aplicación web para registrar mascotas perdidas y sus avistamientos. El backend está desarrollado con FastAPI y SQLAlchemy, con persistencia en SQLite. Permite gestionar usuarios y mascotas, iniciar sesión y registrar y consultar avistamientos geolocalizados que se muestran en un mapa de Google Maps.",
    url: "https://github.com/joseconca/proyecto-final-DAW",
    urlDirecto: "https://github.com/user-attachments/assets/34a21b34-e5cd-4cc4-8b3a-bdea9dda0d0d",
  },
  {
    id: "TFG-historical-events-nextjs",
    categoria: "Juego educativo",
    tipo: "juego" as const,
    estado: "Código privado (TFG en curso)",
    titulo: "Timeline: historia de la informática",
    tecnologias: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "dnd-kit"],
    descripcion:
      "Juego web tipo Timeline en el que hay que colocar eventos de la historia de la informática en orden cronológico mediante drag and drop. Persiste los eventos y las partidas en PostgreSQL con Prisma, valida las colocaciones y registra puntuaciones según el resultado, los errores y el tiempo. Incluye una sección de administración protegida para crear, editar y eliminar eventos.",
  },
  {
    id: "gremio-expediciones-nextjs",
    categoria: "RPG web",
    tipo: "juego" as const,
    titulo: "Gremio Expediciones",
    tecnologias: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Zustand", "Leaflet"],
    descripcion:
      "RPG web en desarrollo centrado en la gestión de una base y las expediciones. Incluye personajes con clases, edificios mejorables, inventario y equipo, habilidades, misiones generadas por dificultad y duración, viajes sobre un mapa geográfico, combates por turnos, recompensas y sistemas de comercio y asedio. Utiliza PostgreSQL y Prisma para persistir los datos e incluye pruebas automatizadas para partes de la lógica de juego y las API.",
    url: "https://github.com/joseconca/gremio-expediciones",
  },
  {
    id: "HTML-canvas-pokemon-spaceinvaders",
    categoria: "Juego arcade",
    tipo: "juego" as const,
    titulo: "¡Corre, Pikachu, corre!",
    tecnologias: ["HTML5 Canvas", "CSS", "JavaScript (módulos ES)"],
    descripcion:
      "Juego arcade inspirado en Space Invaders, con personajes del universo Pokémon. Permite elegir personaje, moverse y disparar a oleadas de enemigos, enfrentarse a jefes y acumular puntuación. Incluye controles táctiles además de teclado.",
    url: "https://github.com/joseconca/juego-pokemon-javascript",
    urlDirecto: "https://joseconca.github.io/juego-pokemon-javascript/",
  },
  {
    id: "joseconca-github-pages",
    categoria: "Portfolio",
    tipo: "aplicacion" as const,
    titulo: "Este portafolio profesional",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    descripcion:
      "Portafolio profesional con Next.js y contenido separado en módulos de datos. Se genera como sitio estático y se publica en GitHub Pages mediante un flujo de despliegue automatizado con GitHub Actions.",
    url: "https://github.com/joseconca/joseconca.github.io",
    urlDirecto: "https://joseconca.github.io/",
  },
  {
    id: "Otros-proyectos",
    categoria: "Más repositorios",
    titulo: "Otros proyectos",
    descripcion:
      "Más proyectos y ejercicios de programación disponibles en mi perfil público de GitHub.",
    url: "https://github.com/joseconca?tab=repositories",
  },
];
