/**
 * Textos de la interfaz y etiquetas del CV para cada idioma.
 * Los datos personales, experiencia, formación, tecnologías y proyectos están
 * en los otros módulos de src/data (español) y src/data/en (inglés).
 */
export type Idioma = "es" | "en";

export const textos = {
  es: {
    meta: {
      titulo: "Jose Conca | Desarrollador de software",
      descripcion: "Portfolio de Jose Conca: experiencia en desarrollo de software, proyectos web e interactivos, tecnología y buenas prácticas.",
      ogTitulo: "Jose Conca | Desarrollador de software"
    },
    navegacion: {
      inicio: "Inicio", proyectos: "Proyectos", trayectoria: "Trayectoria",
      descargaCv: "Descargar CV", selectorIdioma: "Seleccionar idioma",
      inicioAccesible: "Jose Conca, inicio"
    },
    inicio: {
      etiqueta: "Portfolio de desarrollo de software",
      explorarProyectos: "Ver proyectos",
      disponibilidad: "Disponible para oportunidades de desarrollo en remoto desde Gran Canaria",
      puntosFuertesLabel: "Especialidades",
      puntosFuertes: ["Desarrollo de aplicaciones", "Testing y buenas prácticas", "Proyectos propios"],
      competenciasCompletas: "Consultar todas las competencias en el CV",
      retratoAlt: "Retrato de",
      stackEtiqueta: "Stack técnico",
      stackTitulo: "Tecnologías y competencias",
      stackDescripcion: "Lenguajes y herramientas que utilizo para crear aplicaciones, resolver problemas y cuidar la calidad del código.",
      proyectosEtiqueta: "Trabajo seleccionado",
      proyectosTitulo: "Proyectos destacados",
      proyectosDescripcion: "Aplicaciones útiles, experiencias interactivas y videojuegos donde exploro arquitectura, interfaces y lógica de negocio.",
      todosLosProyectos: "Ver todos los proyectos",
      contactoEtiqueta: "Contacto",
      contactoTitulo: "¿Hablamos de software?",
      contactoDescripcion: "Busco oportunidades de desarrollo de software, preferiblemente en remoto. Me interesa colaborar en proyectos donde pueda aportar, seguir aprendiendo y cuidar la calidad del código.",
      contactar: "Contactar por correo",
      verTrayectoria: "Ver trayectoria",
      interesEtiqueta: "Fuera del trabajo",
      interesTitulo: "Los videojuegos también inspiran mi código",
      interesDescripcion: "Disfruto los videojuegos y me interesa comprender cómo están construidos. Por eso también desarrollo proyectos interactivos: desde un RPG web con sistemas de progresión y combate hasta un juego educativo sobre historia de la informática.",
      interesAccion: "Explorar proyectos interactivos",
      verVideo: "Ver vídeo",
      proyectoPrivado: "Código privado (TFG en curso)",
      etiquetaProyecto: "PROYECTO",
      codigoFuente: "Código fuente",
      verDemo: "Ver demo"
    },
    proyectos: {
      etiqueta: "Selección de trabajo", titulo: "Proyectos",
      descripcion: "Aplicaciones web, herramientas y videojuegos desarrollados para explorar diseño de sistemas, lógica de negocio y experiencia de usuario. Cada proyecto incluye código o una demo cuando están disponibles.",
      filtrar: "Filtrar proyectos por tecnología", todos: "Todos",
      listado: "Listado de proyectos"
    },
    trayectoria: {
      etiqueta: "Experiencia y aprendizaje", titulo: "Trayectoria",
      descripcion: "Mi recorrido en desarrollo de software: experiencia profesional, colaboración en equipos y formación técnica orientada a construir aplicaciones mantenibles.",
      formacionEtiqueta: "Formación", formacionTitulo: "Formación académica",
      formacionDescripcion: "Estudios centrados en el desarrollo de aplicaciones y los fundamentos de la ingeniería informática."
    },
    pie: {descripcion: "Desarrollo de software · Calidad · Proyectos interactivos"},
    cv: {
      perfil: "SOBRE MÍ", otros: "OTROS DATOS",
      experiencia: "EXPERIENCIA PROFESIONAL", formacion: "FORMACIÓN ACADÉMICA",
      competencias: "COMPETENCIAS TÉCNICAS", proyectos: "PROYECTOS SELECCIONADOS",
      portfolio: "Portafolio", codigo: "Código", ocupacion: "Desarrollo de software"
    }
  },
  en: {
    meta: {
      titulo: "Jose Conca | Software Developer",
      descripcion: "Jose Conca's portfolio: professional software development experience, web and interactive projects, technologies and best practices.",
      ogTitulo: "Jose Conca | Software Developer"
    },
    navegacion: {
      inicio: "Home", proyectos: "Projects", trayectoria: "Experience",
      descargaCv: "Download CV", selectorIdioma: "Choose language",
      inicioAccesible: "Jose Conca, home"
    },
    inicio: {
      etiqueta: "Software development portfolio",
      explorarProyectos: "View projects",
      disponibilidad: "Available for remote software development roles from the Canary Islands",
      puntosFuertesLabel: "Key strengths",
      puntosFuertes: ["Application development", "Testing and clean code", "Personal projects"],
      competenciasCompletas: "See the complete skill set in my CV",
      retratoAlt: "Portrait of",
      stackEtiqueta: "Technical stack",
      stackTitulo: "Technologies and skills",
      stackDescripcion: "Languages and tools I use to build applications, solve problems and keep code reliable and maintainable.",
      proyectosEtiqueta: "Selected work",
      proyectosTitulo: "Featured projects",
      proyectosDescripcion: "Useful applications, interactive experiences and games exploring architecture, interfaces and business logic.",
      todosLosProyectos: "View all projects",
      contactoEtiqueta: "Contact",
      contactoTitulo: "Let's talk software",
      contactoDescripcion: "I am looking for software development opportunities, preferably remote. I enjoy contributing to projects, learning new things and delivering maintainable code.",
      contactar: "Send an email",
      verTrayectoria: "View experience",
      interesEtiqueta: "Beyond work",
      interesTitulo: "Games inspire the software I build",
      interesDescripcion: "I enjoy playing games and understanding how they work. That curiosity also drives my interactive projects, from a browser RPG with character progression and turn-based combat to an educational game about computing history.",
      interesAccion: "Explore interactive projects",
      verVideo: "Watch video",
      proyectoPrivado: "Private source code (degree project in progress)",
      etiquetaProyecto: "PROJECT",
      codigoFuente: "Source code",
      verDemo: "Live demo"
    },
    proyectos: {
      etiqueta: "Selected work", titulo: "Projects",
      descripcion: "Web applications, tools and games exploring system design, business logic and user experience. Each project links to its source code or a demo when available.",
      filtrar: "Filter projects by technology", todos: "All",
      listado: "Project listing"
    },
    trayectoria: {
      etiqueta: "Experience and learning", titulo: "Experience",
      descripcion: "My software development journey: professional experience, teamwork and technical education focused on maintainable applications.",
      formacionEtiqueta: "Education", formacionTitulo: "Education",
      formacionDescripcion: "Studies in application development and the fundamentals of computer engineering."
    },
    pie: {descripcion: "Software development · Quality · Interactive projects"},
    cv: {
      perfil: "ABOUT ME", otros: "ADDITIONAL INFORMATION",
      experiencia: "PROFESSIONAL EXPERIENCE", formacion: "EDUCATION",
      competencias: "TECHNICAL SKILLS", proyectos: "SELECTED PROJECTS",
      portfolio: "Portfolio", codigo: "Code", ocupacion: "Software development"
    }
  }
};
