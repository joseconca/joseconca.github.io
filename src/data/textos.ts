/**
 * Textos de la interfaz y etiquetas del CV para cada idioma.
 * Los datos personales, experiencia, formación, tecnologías y proyectos están
 * en los otros módulos de src/data (español) y src/data/en (inglés).
 */
export type Idioma = "es" | "en";

export const textos = {
  es: {
    meta: {
      titulo: "Jose Conca | Desarrollador Backend y Full Stack Junior",
      descripcion: "Portafolio de Jose Conca, desarrollador de software junior: experiencia, tecnologías y proyectos de backend y full stack.",
      ogTitulo: "Jose Conca | Desarrollador de software junior"
    },
    navegacion: {
      inicio: "Inicio", proyectos: "Proyectos", trayectoria: "Trayectoria",
      descargaCv: "Descargar CV", selectorIdioma: "Seleccionar idioma",
      inicioAccesible: "Jose Conca, inicio"
    },
    inicio: {
      etiqueta: "Portafolio profesional · 2026",
      explorarProyectos: "Explorar proyectos",
      retratoAlt: "Retrato de",
      stackEtiqueta: "Stack técnico",
      stackTitulo: "Tecnologías y competencias",
      stackDescripcion: "Una base orientada al desarrollo de software, desde la lógica de negocio y los datos hasta la interfaz y el despliegue.",
      proyectosEtiqueta: "Trabajo seleccionado",
      proyectosTitulo: "Proyectos destacados",
      proyectosDescripcion: "Proyectos reales y personales que muestran cómo abordo la lógica de negocio, la persistencia de datos y la experiencia de usuario.",
      todosLosProyectos: "Ver todos los proyectos",
      contactoEtiqueta: "Contacto",
      contactoTitulo: "¿Hablamos de software?",
      contactoDescripcion: "Estoy interesado en oportunidades junior de desarrollo backend o full stack. Si buscas a alguien con ganas de construir, aprender y cuidar la calidad del código, estaré encantado de conversar.",
      contactar: "Contactar por correo",
      verTrayectoria: "Ver trayectoria",
      etiquetaProyecto: "PROYECTO",
      codigoFuente: "Código fuente",
      verDemo: "Ver demo"
    },
    proyectos: {
      etiqueta: "Selección de trabajo", titulo: "Proyectos",
      descripcion: "Aplicaciones web, APIs y proyectos personales donde exploro arquitectura, persistencia de datos, lógica de negocio y experiencia de usuario. Cada ficha enlaza al código fuente o a una demo cuando está disponible.",
      filtrar: "Filtrar proyectos por tecnología", todos: "Todos",
      listado: "Listado de proyectos"
    },
    trayectoria: {
      etiqueta: "Experiencia y aprendizaje", titulo: "Trayectoria",
      descripcion: "Mi recorrido en desarrollo de software: experiencia profesional, colaboración en equipos y formación técnica orientada a construir aplicaciones mantenibles.",
      formacionEtiqueta: "Formación", formacionTitulo: "Formación académica",
      formacionDescripcion: "Estudios centrados en el desarrollo de aplicaciones y los fundamentos de la ingeniería informática."
    },
    pie: {descripcion: "Desarrollo de software · Backend · Full Stack"},
    cv: {
      perfil: "SOBRE MÍ", otros: "OTROS DATOS",
      experiencia: "EXPERIENCIA PROFESIONAL", formacion: "FORMACIÓN ACADÉMICA",
      competencias: "COMPETENCIAS TÉCNICAS", proyectos: "PROYECTOS SELECCIONADOS",
      portfolio: "Portafolio", codigo: "Código", ocupacion: "Desarrollo de software"
    }
  },
  en: {
    meta: {
      titulo: "Jose Conca | Junior Backend & Full-Stack Developer",
      descripcion: "Jose Conca's portfolio: software development experience, technical skills and backend and full-stack projects.",
      ogTitulo: "Jose Conca | Junior Software Developer"
    },
    navegacion: {
      inicio: "Home", proyectos: "Projects", trayectoria: "Experience",
      descargaCv: "Download CV", selectorIdioma: "Choose language",
      inicioAccesible: "Jose Conca, home"
    },
    inicio: {
      etiqueta: "Professional portfolio · 2026",
      explorarProyectos: "Explore projects",
      retratoAlt: "Portrait of",
      stackEtiqueta: "Technical stack",
      stackTitulo: "Technologies and skills",
      stackDescripcion: "A software development skill set covering business logic and data, user interfaces and deployment.",
      proyectosEtiqueta: "Selected work",
      proyectosTitulo: "Featured projects",
      proyectosDescripcion: "Professional and personal projects highlighting my approach to business logic, data persistence and user experience.",
      todosLosProyectos: "View all projects",
      contactoEtiqueta: "Contact",
      contactoTitulo: "Let's talk software",
      contactoDescripcion: "I'm looking for junior backend or full-stack development opportunities. If you value building, learning and writing maintainable code, I'd be glad to connect.",
      contactar: "Send an email",
      verTrayectoria: "View experience",
      etiquetaProyecto: "PROJECT",
      codigoFuente: "Source code",
      verDemo: "Live demo"
    },
    proyectos: {
      etiqueta: "Selected work", titulo: "Projects",
      descripcion: "Web applications, APIs and personal projects exploring software architecture, data persistence, business logic and user experience. Each project links to its source code and, where available, a demo.",
      filtrar: "Filter projects by technology", todos: "All",
      listado: "Project listing"
    },
    trayectoria: {
      etiqueta: "Experience and learning", titulo: "Experience",
      descripcion: "My software development journey: professional experience, teamwork and technical education focused on maintainable applications.",
      formacionEtiqueta: "Education", formacionTitulo: "Education",
      formacionDescripcion: "Studies in application development and the fundamentals of computer engineering."
    },
    pie: {descripcion: "Software development · Backend · Full Stack"},
    cv: {
      perfil: "ABOUT ME", otros: "ADDITIONAL INFORMATION",
      experiencia: "PROFESSIONAL EXPERIENCE", formacion: "EDUCATION",
      competencias: "TECHNICAL SKILLS", proyectos: "SELECTED PROJECTS",
      portfolio: "Portfolio", codigo: "Code", ocupacion: "Software development"
    }
  }
};
