export const proyectos = [
  {
    id: "trabajoCiclo-fastAPI-find-my-pet",
    titulo: "Find My Pet",
    tecnologias: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "Google Maps API"],
    descripcion:
      "Aplicación web para registrar mascotas perdidas y sus avistamientos. El backend está desarrollado con FastAPI y SQLAlchemy, con persistencia en SQLite. Permite gestionar usuarios y mascotas, iniciar sesión y registrar y consultar avistamientos geolocalizados que se muestran en un mapa de Google Maps.",
    url: "https://github.com/joseconca/proyecto-final-DAW",
  },
  {
    id: "TFG-historical-events-nextjs",
    titulo: "Timeline: historia de la informática",
    tecnologias: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "dnd-kit"],
    descripcion:
      "Juego web tipo Timeline en el que hay que colocar eventos de la historia de la informática en orden cronológico mediante drag and drop. Persiste los eventos y las partidas en PostgreSQL con Prisma, valida las colocaciones y registra puntuaciones según el resultado, los errores y el tiempo. Incluye una sección de administración protegida para crear, editar y eliminar eventos.",
    url: "https://github.com/joseconca/proyecto-timeline",
  },
  {
    id: "gremio-expediciones-nextjs",
    titulo: "Gremio Expediciones",
    tecnologias: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Zustand", "Leaflet"],
    descripcion:
      "RPG web en desarrollo centrado en la gestión de una base y las expediciones. Incluye personajes con clases, edificios mejorables, inventario y equipo, habilidades, misiones generadas por dificultad y duración, viajes sobre un mapa geográfico, combates por turnos, recompensas y sistemas de comercio y asedio. Utiliza PostgreSQL y Prisma para persistir los datos e incluye pruebas automatizadas para partes de la lógica de juego y las API.",
    url: "https://github.com/joseconca/gremio-expediciones",
  },
  {
    id: "HTML-canvas-pokemon-spaceinvaders",
    titulo: "¡Corre, Pikachu, corre!",
    tecnologias: ["HTML5 Canvas", "CSS", "JavaScript (módulos ES)"],
    descripcion:
      "Juego arcade inspirado en Space Invaders, con personajes del universo Pokémon. Permite elegir personaje, moverse y disparar a oleadas de enemigos, enfrentarse a jefes y acumular puntuación. Incluye controles táctiles además de teclado.",
    url: "https://github.com/joseconca/juego-pokemon-javascript",
    urlDirecto: "https://joseconca.github.io/juego-pokemon-javascript/",
  },
  {
    id: "joseconca-github-pages",
    titulo: "Este portafolio profesional",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    descripcion:
      "Portafolio profesional con Next.js y contenido separado en módulos de datos. Se genera como sitio estático y se publica en GitHub Pages mediante un flujo de despliegue automatizado con GitHub Actions.",
    url: "https://github.com/joseconca/joseconca.github.io",
    urlDirecto: "https://joseconca.github.io/",
  },
  {
    id: "Otros-proyectos",
    titulo: "Otros proyectos",
    descripcion:
      "Más proyectos y ejercicios de programación disponibles en mi perfil público de GitHub.",
    url: "https://github.com/joseconca?tab=repositories",
  },
];
