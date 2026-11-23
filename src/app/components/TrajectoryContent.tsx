import { getPortfolio } from "@/data/portfolio";
import { textos, type Idioma } from "@/data/textos";

export default function TrajectoryContent({ idioma }: { idioma: Idioma }) {
  const { experienciaProfesional, formacionAcademica } = getPortfolio(idioma);
  const t = textos[idioma].trayectoria;

  return (
    <div className="page-stack trajectory-page">
      <header className="page-header trajectory-page-header">
        <h1 className="page-title">{t.titulo}</h1>
      </header>

      <section aria-labelledby="experience-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.experienciaEtiqueta}</span>
            <h2 id="experience-heading" className="section-title">{t.experienciaTitulo}</h2>
            <p className="section-description">{t.descripcion}</p>
          </div>
        </div>
        <div className="timeline-list">
          {experienciaProfesional.map((experiencia) => (
            <article key={experiencia.id} className="timeline-card">
              <div className="timeline-date">
                <time>{experiencia.fechaInicio}</time>
                <span aria-hidden="true">—</span>
                <time>{experiencia.fechaFin}</time>
              </div>
              <h3>{experiencia.rol}</h3>
              <p className="timeline-company">
                {experiencia.urlEmpresa ? (
                  <a href={experiencia.urlEmpresa} target="_blank" rel="noreferrer">
                    {experiencia.empresa} <span aria-hidden="true">↗</span>
                  </a>
                ) : experiencia.empresa}
                <span> · {experiencia.contexto}</span>
              </p>
              {experiencia.tareas.map((tarea) => (
                <div key={tarea.titulo} className="timeline-task">
                  <h4>{tarea.titulo}</h4>
                  <ul className="detail-list">
                    {tarea.detalles.map((detalle) => <li key={detalle}>{detalle}</li>)}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.formacionEtiqueta}</span>
            <h2 id="education-heading" className="section-title">{t.formacionTitulo}</h2>
            <p className="section-description">{t.formacionDescripcion}</p>
          </div>
        </div>
        <div className="education-grid">
          {formacionAcademica.map((formacion) => (
            <article key={formacion.id} className="education-card">
              <div className="education-topline">
                <h3>{formacion.titulacion}</h3>
                <span className="education-period">{formacion.periodo}</span>
              </div>
              <p className="education-institution">{formacion.institucion}</p>
              <ul className="detail-list">
                {formacion.detalles.map((detalle) => <li key={detalle}>{detalle}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
