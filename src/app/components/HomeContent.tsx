import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";
import { getPortfolio, rutaIdioma } from "@/data/portfolio";
import { textos, type Idioma } from "@/data/textos";

export default function HomeContent({ idioma }: { idioma: Idioma }) {
  const { datosContacto, skillStack, proyectos } = getPortfolio(idioma);
  const t = textos[idioma].inicio;

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">{t.etiqueta}</span>
          <h1 className="hero-title">{datosContacto.nombre}</h1>
          <p className="hero-role">{datosContacto.rol}</p>
          <p className="hero-description">{datosContacto.perfilProfesional}</p>
          <div className="hero-actions">
            <Link href={rutaIdioma(idioma, "/proyectos")} className="button-primary">
              {t.explorarProyectos} <span aria-hidden="true">↗</span>
            </Link>
            <a href={datosContacto.curriculumPdf} download className="button-secondary">
              {textos[idioma].navegacion.descargaCv} <span aria-hidden="true">↓</span>
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
            <img src="/avatar.jpg" alt={`${t.retratoAlt} ${datosContacto.nombre}`} className="hero-avatar" />
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
            <span className="eyebrow">{t.stackEtiqueta}</span>
            <h2 className="section-title">{t.stackTitulo}</h2>
            <p className="section-description">{t.stackDescripcion}</p>
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
            <span className="eyebrow">{t.proyectosEtiqueta}</span>
            <h2 className="section-title">{t.proyectosTitulo}</h2>
            <p className="section-description">{t.proyectosDescripcion}</p>
          </div>
          <Link href={rutaIdioma(idioma, "/proyectos")} className="button-secondary">
            {t.todosLosProyectos} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="projects-grid">
          {proyectos.filter((proyecto) => proyecto.tecnologias?.length).slice(0, 3).map((proyecto, index) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} index={index} idioma={idioma} destacado />
          ))}
        </div>
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
