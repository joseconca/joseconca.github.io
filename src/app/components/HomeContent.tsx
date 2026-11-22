import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import { getPortfolio, rutaIdioma } from "@/data/portfolio";
import { textos, type Idioma } from "@/data/textos";

export default function HomeContent({ idioma }: { idioma: Idioma }) {
  const { datosContacto, skillStack, proyectos } = getPortfolio(idioma);
  const t = textos[idioma].inicio;
  const categoriasPrincipales = idioma === "es"
    ? ["Lenguajes de programación", "Backend y APIs", "Frontend para desarrollo full stack", "Calidad, herramientas y despliegue"]
    : ["Programming languages", "Backend and APIs", "Frontend for full-stack development", "Quality, tools and deployment"];

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">{t.etiqueta}</span>
          <h1 className="hero-title">{datosContacto.nombre}</h1>
          <p className="hero-role">{datosContacto.rol}</p>
          <p className="hero-description">{datosContacto.perfilProfesional}</p>
          <div className="hero-highlights" aria-label={t.puntosFuertesLabel}>
            {t.puntosFuertes.map((punto) => (
              <span key={punto} className="hero-highlight">{punto}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href={datosContacto.curriculumPdf} download className="button-primary">
              {textos[idioma].navegacion.descargaCv} <span aria-hidden="true">↓</span>
            </a>
            <Link href={rutaIdioma(idioma, "/proyectos")} className="button-secondary">
              {t.explorarProyectos} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="contact-strip">
            <span>{datosContacto.localizacion}</span>
            <span className="contact-availability">{t.disponibilidad}</span>
            <a href={`mailto:${datosContacto.email}`}>{datosContacto.email}</a>
            <a href={datosContacto.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={datosContacto.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="hero-avatar-frame">
            <img src="/avatar.jpg" alt={`${t.retratoAlt} ${datosContacto.nombre}`} className="hero-avatar" />
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.stackEtiqueta}</span>
            <h2 className="section-title">{t.stackTitulo}</h2>
            <p className="section-description">{t.stackDescripcion}</p>
          </div>
        </div>
        <div className="skills-grid skills-grid-featured">
          {categoriasPrincipales.map((categoria) => {
            const datos = skillStack[categoria];
            return datos ? (
              <article key={categoria} className="skill-card">
                <h3>{categoria}</h3>
                <p>{datos.descripcion}</p>
                <div className="tech-list">
                  {datos.tecnologias.map((tecnologia) => (
                    <span key={tecnologia} className="tech-pill">{tecnologia}</span>
                  ))}
                </div>
              </article>
            ) : null;
          })}
        </div>
        <p className="skills-more">
          <a href={datosContacto.curriculumPdf} download>
            {t.competenciasCompletas} <span aria-hidden="true">↓</span>
          </a>
        </p>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.proyectosEtiqueta}</span>
            <h2 className="section-title">{t.proyectosTitulo}</h2>
            <p className="section-description">{t.proyectosDescripcion}</p>
          </div>
          <Link href={rutaIdioma(idioma, "/proyectos")} className="button-secondary">
            {t.todosLosProyectos} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="projects-grid projects-grid-featured">
          {proyectos.filter((proyecto) => proyecto.tecnologias?.length).slice(0, 4).map((proyecto, index) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} index={index} idioma={idioma} destacado />
          ))}
        </div>
      </section>

      <section className="interests-panel" aria-labelledby="interests-title">
        <div className="interests-emblem" aria-hidden="true">
          <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M26 35h44c8 0 13 5 16 14l5 16c2 8-5 15-13 12l-14-10H32L18 77C10 80 3 73 5 65l5-16c3-9 8-14 16-14Z" />
            <path d="M27 48v17M19 56.5h16" />
            <circle cx="65" cy="50" r="3" fill="currentColor" stroke="none" />
            <circle cx="74" cy="59" r="3" fill="currentColor" stroke="none" />
            <path d="m35 24 7-10 7 10M61 18h17" opacity=".65"/>
          </svg>
        </div>
        <div className="interests-copy">
          <span className="eyebrow">{t.interesEtiqueta}</span>
          <h2 id="interests-title" className="interests-title">{t.interesTitulo}</h2>
          <p>{t.interesDescripcion}</p>
        </div>
        <Link href={rutaIdioma(idioma, "/proyectos")} className="interests-link">
          {t.interesAccion} <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="contact-panel">
        <span className="eyebrow">{t.contactoEtiqueta}</span>
        <h2>{t.contactoTitulo}</h2>
        <p>{t.contactoDescripcion}</p>
        <div className="hero-actions">
          <a href={`mailto:${datosContacto.email}`} className="button-primary">
            {t.contactar} <span aria-hidden="true">↗</span>
          </a>
          <Link href={rutaIdioma(idioma, "/trayectoria")} className="button-secondary">
            {t.verTrayectoria}
          </Link>
        </div>
      </section>
    </div>
  );
}
