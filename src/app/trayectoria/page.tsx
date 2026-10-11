import { experienciaProfesional } from "@/data/experienciaProfesional";
import { formacionAcademica } from "@/data/formacionAcademica";

export default function TrayectoriaPage() {
  return (
    <div className="page-stack">
      <section>
        <header className="page-header">
          <span className="eyebrow">Experiencia y aprendizaje</span>
          <h1 className="page-title">Trayectoria</h1>
          <p className="page-intro">
            Mi recorrido en desarrollo de software: experiencia profesional, colaboración en equipos
            y formación técnica orientada a construir aplicaciones mantenibles.
          </p>
        </header>

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

      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">Formación</span>
            <h2 className="section-title">Formación académica</h2>
            <p className="section-description">
              Estudios centrados en el desarrollo de aplicaciones y los fundamentos de la ingeniería informática.
            </p>
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
