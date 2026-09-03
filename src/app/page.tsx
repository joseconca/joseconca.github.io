import Link from 'next/link';
import { datosContacto } from '@/data/datosContacto';
import { skillStack } from '@/data/skillStack';
import { proyectos } from '@/data/proyectos';

export default function HomePage() {
  const proyectosDestacados = proyectos.slice(0, 2);
  const formatearNombreCategoria = (categoria: string) =>
    categoria
      .replace(/([a-z])([A-Z])/g, '$1 $2')
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
              {datosContacto.rol} — {datosContacto.localizacion}
            </p>
          </div>

          <p className="text-slate-400 max-w-2xl leading-relaxed text-sm sm:text-base">
            Especializado en desarrollo web fullstack, aplicaciones de software y experimentación con inteligencia artificial. Graduado en DAW y finalizando el Grado en Ingeniería Informática.
          </p>

          {/* Botones de Acción Rápidos */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="/proyectos"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-md text-sm"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/cv"
              className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold px-5 py-2.5 rounded-lg border border-slate-600 transition-colors text-sm"
            >
              Ver CV Completo
            </Link>
            <a
              href={`mailto:${datosContacto.email}`}
              className="text-slate-400 hover:text-white underline text-sm transition-colors py-2 px-1"
            >
              {datosContacto.email}
            </a>
          </div>
        </div>
      </section>

      {/* 2. ÁREAS Y STACK DESTACADO */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Especialidades y Tecnologías
          </h2>
          <Link href="/cv" className="text-sm text-blue-400 hover:underline">
            Detalles en CV →
          </Link>
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
              <p className="text-slate-400 text-sm mb-4">
                {datos.descripcion}
              </p>
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
                  {proyecto.tecnologias && proyecto.tecnologias.map((tech) => (
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
        <h2 className="text-2xl font-bold text-white">¿Interesado en mi perfil?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
          Puedes revisar mi trayectoria académica y profesional completa en la sección del CV o descargar una copia lista para imprimir.
        </p>
        <div className="pt-2">
          <Link href="/cv"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors text-sm"
          >
            Ver
              </Link>
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