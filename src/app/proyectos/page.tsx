"use client";

import { useState, useMemo } from 'react';
import { proyectos } from '@/data/proyectos';

export default function ProyectosPage() {
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  const todasLasTecnologias = useMemo(() => {
    const techs = new Set<string>();
    proyectos.forEach((proyecto) => {
      proyecto.tecnologias?.forEach((tech) => techs.add(tech));
    });

    return ["Todos", ...Array.from(techs).sort()];
  }, []);

  const proyectosFiltrados = useMemo(() => {
    const otrosProyectos = proyectos.filter(
      (proyecto) => proyecto.id === "Otros-proyectos"
    );
    const proyectosPrincipales = proyectos.filter(
      (proyecto) => proyecto.id !== "Otros-proyectos"
    );
    const proyectosCoincidentes =
      filtroActivo === "Todos"
        ? proyectosPrincipales
        : proyectosPrincipales.filter((proyecto) =>
            proyecto.tecnologias?.includes(filtroActivo)
          );

    return [...proyectosCoincidentes, ...otrosProyectos];
  }, [filtroActivo]);

  return (
    <div className="space-y-10">
      
      {/* 1. CABECERA DE LA PÁGINA */}
      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Mis Proyectos
        </h1>
        <p className="text-slate-400 max-w-3xl text-lg">
          Explora algunos de los desarrollos en los que he estado trabajando. 
          Desde aplicaciones web modernas y APIs, hasta prototipos de videojuegos.
        </p>
      </header>

      {/* 2. BARRA DE FILTROS */}
      <section>
        <div className="flex flex-wrap gap-2">
          {todasLasTecnologias.map((tech) => (
            <button
              key={tech}
              onClick={() => setFiltroActivo(tech)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                filtroActivo === tech
                  ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-900/20"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </section>

      {/* 3. REJILLA DE PROYECTOS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {proyectosFiltrados.map((proyecto) => (
          <article
            key={proyecto.id}
            className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col transition-all hover:bg-slate-800/50 hover:border-slate-700 hover:shadow-xl"
          >
            {/* Contenido principal de la tarjeta */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">
                {proyecto.titulo}
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                {proyecto.descripcion}
              </p>
            </div>

            {/* Footer de la tarjeta: Tecnologías y Botones */}
            <div className="mt-4 pt-6 border-t border-slate-800/80">
              
              {/* Etiquetas de tecnología */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.tecnologias?.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-blue-400 bg-blue-950/30 px-2.5 py-1 rounded-md font-mono border border-blue-900/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex flex-wrap gap-3">
                {proyecto.url && (
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Código Fuente ↗
                  </a>
                )}
                
                {proyecto.urlDirecto && (
                  <a
                    href={proyecto.urlDirecto}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Ver Demo →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* Mensaje de apoyo si algún filtro (en el futuro) se quedase vacío */}
        {proyectosFiltrados.length === 0 && (
          <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-700 rounded-2xl">
            <p className="text-slate-400">
              No hay proyectos que coincidan con esta tecnología todavía.
            </p>
          </div>
        )}
      </section>

    </div>
  );
}