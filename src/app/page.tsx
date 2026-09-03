import Link from "next/link";
import { datosContacto } from "@/data/datosContacto";
import { skillStack } from "@/data/skillStack";
import { proyectos } from "@/data/proyectos";

export default function HomePage() {
  const proyectosDestacados = proyectos.slice(0, 2);
  const formatearNombreCategoria = (categoria: string) =>
    categoria
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (letra) => letra.toUpperCase());

  return (
    <div className="space-y-16">
      {/* Presentación */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-slate-800/50 p-8 sm:p-10 rounded-2xl border border-slate-700/60 shadow-xl">
        <img
          src="/avatar.jpg"
          alt={`Foto de ${datosContacto.nombre}`}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg shrink-0"
        />
        <div className="space-y-4 text-center md:text-left">
          <div>
            <span className="text-blue-400 font-mono text-sm tracking-wide uppercase font-semibold">
              Portafolio Profesional
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
              {datosContacto.nombre}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium mt-1">
              {datosContacto.rol}
            </p>
          </div>

          <p className="text-slate-400 max-w-2xl leading-relaxed text-sm sm:text-base">
            Con experiencia en desarrollo web fullstack y aplicaciones de
            software.
          </p>
          <p className="text-slate-400 max-w-2xl leading-relaxed text-sm sm:text-base">
            Graduado en DAW y finalizando el Grado en Ingeniería Informática.
          </p>

          {/* Datos de contacto */}
          <div className="flex flex-col items-center md:items-start gap-1.5 pt-2 text-sm">
            <div>
              <span className="text-slate-500">Localización: </span>
              <span className="text-slate-300">{datosContacto.localizacion}</span>
            </div>
            <div>
              <span className="text-slate-500">Email: </span>
              <a
                href={`mailto:${datosContacto.email}`}
                className="text-slate-300 hover:text-blue-400 hover:underline transition-colors"
              >
                {datosContacto.email}
              </a>
            </div>
            <div>
              <span className="text-slate-500">Github: </span>
              <a
                href={datosContacto.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-400 hover:underline transition-colors"
              >
                joseconca.github.io
              </a>
            </div>
            <div>
              <span className="text-slate-500">LinkedIn: </span>
              <a
                href={datosContacto.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-400 hover:underline transition-colors"
              >
                /in/joseconca
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ÁREAS Y STACK DESTACADO */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Especialidades y Tecnologías
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skillStack).map(([categoria, datos]) => (
            <div
              key={categoria}
              className="bg-slate-800/30 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-2 text-blue-400">
                {formatearNombreCategoria(categoria)}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{datos.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                {datos.tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded font-mono border border-slate-700"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROYECTOS DESTACADOS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Una pequeña muestra de los desarrollos en los que he trabajado.
            </p>
          </div>
          <Link
            href="/proyectos"
            className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-md font-medium transition-colors border border-slate-700"
          >
            Ver todos ({proyectos.length})
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectosDestacados.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-slate-800/40 p-6 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {proyecto.descripcion}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {proyecto.tecnologias &&
                    proyecto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded font-mono border border-blue-900/50"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CALL-TO-ACTION */}
      <section className="bg-gradient-to-r from-blue-900/30 to-slate-800/40 p-8 rounded-2xl border border-blue-900/40 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">
          ¿Interesado en mi perfil?
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
          Puedes conocer mis principales áreas de especialización y descargar
          una copia de mi CV lista para imprimir.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={datosContacto.curriculumPdf}
            download
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors text-sm"
          >
            Descargar en PDF
          </a>
        </div>
      </section>
    </div>
  );
}
