import type { Proyecto } from "@/data/portfolio";
import { textos, type Idioma } from "@/data/textos";

type Props = {
  proyecto: Proyecto;
  index: number;
  idioma: Idioma;
  destacado?: boolean;
};

export default function ProjectCard({ proyecto, index, idioma, destacado = false }: Props) {
  const t = textos[idioma].inicio;
  return (
    <article className="project-card">
      <div>
        <span className="project-index">
          {t.etiquetaProyecto} / {String(index + 1).padStart(2, "0")}
        </span>
        {destacado ? <h3>{proyecto.titulo}</h3> : <h2>{proyecto.titulo}</h2>}
        <p>{proyecto.descripcion}</p>
      </div>
      <div className="project-footer">
        {proyecto.tecnologias?.length ? (
          <div className="tech-list">
            {proyecto.tecnologias.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        ) : null}
        <div className="project-links">
          {proyecto.url ? (
            <a href={proyecto.url} target="_blank" rel="noreferrer" className="project-link">
              {t.codigoFuente} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {proyecto.urlDirecto ? (
            <a href={proyecto.urlDirecto} target="_blank" rel="noreferrer" className="project-link">
              {t.verDemo} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
