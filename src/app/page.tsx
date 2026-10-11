import Link from "next/link";
import { datosContacto } from "@/data/datosContacto";
import { skillStack } from "@/data/skillStack";
import { proyectos } from "@/data/proyectos";

export default function HomePage() {
  const proyectosDestacados = proyectos.slice(0, 3);

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Portafolio profesional · 2026</span>
          <h1 className="hero-title">{datosContacto.nombre}</h1>
          <p className="hero-role">{datosContacto.rol}</p>
          <p className="hero-description">
            Desarrollo software con foco en <strong>backend, APIs y aplicaciones full stack</strong>.
            Tengo experiencia profesional con C#/.NET, integración de APIs REST y pruebas automatizadas,
            además de trabajar con Python, SQL y tecnologías web modernas.
          </p>
          <p className="hero-description" style={{ marginTop: ".8rem" }}>
            Técnico Superior en Desarrollo de Aplicaciones Web y estudiante del Grado en Ingeniería Informática.
            Utilizo herramientas de IA como apoyo al desarrollo, sin perder de vista la calidad y el mantenimiento del código.
          </p>

          <div className="hero-actions">
            <Link href="/proyectos" className="button-primary">
              Explorar proyectos <span aria-hidden="true">↗</span>
            </Link>
            <a href={datosContacto.curriculumPdf} download className="button-secondary">
              Descargar CV <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="contact-strip">
            <span>{datosContacto.localizacion}</span>
            <a href={`mailto:${datosContacto.email}`}>{datosContacto.email}</a>
            <a href={datosContacto.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={datosContacto.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="hero-avatar-frame">
            <img src="/avatar.jpg" alt={`Retrato de ${datosContacto.nombre}`} className="hero-avatar" />
          </div>
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            <span>Backend · Full Stack · Software</span>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">Stack técnico</span>
            <h2 className="section-title">Tecnologías y competencias</h2>
            <p className="section-description">
              Una base orientada al desarrollo de software, desde la lógica de negocio y los datos hasta la interfaz y el despliegue.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {Object.entries(skillStack).map(([categoria, datos]) => (
            <article key={categoria} className="skill-card">
              <h3>{categoria}</h3>
              <p>{datos.descripcion}</p>
              <div className="tech-list">
                {datos.tecnologias.map((tecnologia) => (
                  <span key={tecnologia} className="tech-pill">{tecnologia}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">Trabajo seleccionado</span>
            <h2 className="section-title">Proyectos destacados</h2>
            <p className="section-description">
              Proyectos reales y personales que muestran cómo abordo la lógica de negocio, la persistencia de datos y la experiencia de usuario.
            </p>
          </div>
          <Link href="/proyectos" className="button-secondary">
            Ver todos los proyectos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="projects-grid">
          {proyectosDestacados.map((proyecto, index) => (
            <article key={proyecto.id} className="project-card">
              <div>
                <span className="project-index">PROYECTO / {String(index + 1).padStart(2, "0")}</span>
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
              </div>
              <div className="project-footer">
                <div className="tech-list">
                  {proyecto.tecnologias?.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {proyecto.url && (
                    <a href={proyecto.url} target="_blank" rel="noreferrer" className="project-link">
                      Código fuente <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {proyecto.urlDirecto && (
                    <a href={proyecto.urlDirecto} target="_blank" rel="noreferrer" className="project-link">
                      Ver demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panel">
        <span className="eyebrow">Contacto</span>
        <h2>¿Hablamos de software?</h2>
        <p>
          Estoy interesado en oportunidades junior de desarrollo backend o full stack.
          Si buscas a alguien con ganas de construir, aprender y cuidar la calidad del código, estaré encantado de conversar.
        </p>
        <div className="hero-actions">
          <a href={`mailto:${datosContacto.email}`} className="button-primary">
            Contactar por correo <span aria-hidden="true">↗</span>
          </a>
          <Link href="/trayectoria" className="button-secondary">Ver trayectoria</Link>
        </div>
      </section>
    </div>
  );
}