import { experienciaProfesional } from "@/data/experienciaProfesional";
import { formacionAcademica } from "@/data/formacionAcademica";

export default function TrayectoriaPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Experiencia profesional
          </h2>
        </div>

        <div className="space-y-8">
          {experienciaProfesional.map((experiencia) => (
            <article
              key={experiencia.id}
              className="bg-slate-800/30 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-blue-400 font-mono mb-4">
                <time>{experiencia.fechaInicio}</time>
                <span className="text-slate-500">-</span>
                <time>{experiencia.fechaFin}</time>
              </div>
              <h3 className="text-xl font-bold text-white">
                {experiencia.rol}
              </h3>
              <p className="text-slate-300 mt-1">
                {experiencia.urlEmpresa ? (
                  <a
                    href={experiencia.urlEmpresa}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {experiencia.empresa}
                  </a>
                ) : (
                  experiencia.empresa
                )}
                <span className="text-slate-500"> · {experiencia.contexto}</span>
              </p>
              <div className="mt-4 space-y-4">
                {experiencia.tareas.map((tarea) => (
                  <div key={tarea.titulo}>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {tarea.titulo}
                    </h4>
                      <ul className="list-none text-slate-400 text-sm leading-relaxed mt-2 space-y-1">
                        {tarea.detalles.map((detalle) => (
                          <li key={detalle}>{detalle}</li>
                        ))}
                      </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Formación académica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formacionAcademica.map((formacion) => (
            <article
              key={formacion.id}
              className="bg-slate-800/30 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-bold text-white">
                  {formacion.titulacion}
                </h3>
                <span className="text-sm text-blue-400 font-mono">
                  {formacion.periodo}
                </span>
              </div>
              <p className="text-slate-300 mt-2">{formacion.institucion}</p>
              <ul className="list-none text-slate-400 text-sm leading-relaxed mt-4 space-y-1">
                {formacion.detalles.map((detalle) => (
                  <li key={detalle}>{detalle}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
