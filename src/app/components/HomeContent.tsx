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
      <section className="intro-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.etiqueta}</span>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-copy">
            <h1 className="hero-title">{datosContacto.nombre}</h1>
            <p className="hero-role">{datosContacto.rol}</p>
            <p className="hero-description">{datosContacto.perfilProfesional}</p>
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

      <section className="contact-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.contactoEtiqueta}</span>
            <h2 className="section-title">{t.contactoTitulo}</h2>
          </div>
        </div>
        <div className="contact-panel">
          <p>{t.contactoDescripcion}</p>
          <div className="hero-actions">
            <a href={`mailto:${datosContacto.email}`} className="button-primary">
              {t.contactar} <span aria-hidden="true">↗</span>
            </a>
            <Link href={rutaIdioma(idioma, "/trayectoria")} className="button-secondary">
              {t.verTrayectoria}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
